import { AxiosResponse } from "axios";
import { wordCounter, makeRequest, makeConcurrentRequest } from ".";
import { Top10WordsClientObject, Item } from "../types";

const processWords = async (itemIds: number[], itemType: string) => {
  let mostRepeatedWords: Top10WordsClientObject;
  let concatenatedWords: string = "";

  if (itemIds.length > 0) {
    const { get } = await makeConcurrentRequest();
    const hackerNewsMultipleItemRequests: Promise<AxiosResponse<Item>>[] =
      itemIds.map((itemId: number) => get(`item/${itemId}.json`));

    const hackerNewsMultipleItemResponses: AxiosResponse<Item>[] =
      await Promise.all(hackerNewsMultipleItemRequests);

    switch (itemType) {
      case "story":
        hackerNewsMultipleItemResponses.map(({ data: { title } }) => {
          concatenatedWords += `${title}`;
        });
      case "comment":
        hackerNewsMultipleItemResponses.map(({ data: { text } }) => {
          concatenatedWords += `${text}`;
        });
    }

    mostRepeatedWords = wordCounter(concatenatedWords);
  } else {
    mostRepeatedWords = {};
  }

  return mostRepeatedWords;
};

const processWordsFromLast25Stories = async (): Promise<
  Top10WordsClientObject | undefined
> => {
  try {
    const { data: newStoryIds }: { data: number[] } = await makeRequest(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );

    const lastTwentyFiveStories = newStoryIds.slice(0, 25);

    const mostRepeatedWords = await processWords(
      lastTwentyFiveStories,
      "story"
    );

    return mostRepeatedWords;
  } catch (e) {
    console.error(e);
  }
};

const processWordsFromLastWeeksPost = async (
  postFromLastWeek: Item
): Promise<Top10WordsClientObject | undefined> => {
  try {
    const mostRepeatedWords = await processWords(
      postFromLastWeek?.kids || [],
      "comment"
    );

    return mostRepeatedWords;
  } catch (e) {
    console.error(e);
  }
};

export {
  processWords,
  processWordsFromLast25Stories,
  processWordsFromLastWeeksPost,
};
