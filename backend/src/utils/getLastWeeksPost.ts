import { getDateFromLastWeek, webScrape, makeRequest } from ".";
import { Item } from "../types";

const getLastWeeksPost = async (): Promise<Item> => {
  const urlDate = await getDateFromLastWeek();

  const { data: hackerNewsHtmlMarkupString }: { data: string } =
    await makeRequest(`https://news.ycombinator.com/front?day=${urlDate}`);

  const firstPostId: string = await webScrape(hackerNewsHtmlMarkupString);

  const { data: firstPostFromLastWeek }: { data: Item } = await makeRequest(
    `https://hacker-news.firebaseio.com/v0/item/${firstPostId}.json`
  );

  return firstPostFromLastWeek;
};

export { getLastWeeksPost };
