import { RequestHandler } from "express";
import { getLastWeeksPost, processWordsFromLastWeeksPost } from "../utils";
import { Item, Top10WordsClientObject } from "../types";

const getTop10WordsFromLastWeeksPost: RequestHandler = async (_, res) => {
  try {
    const lastWeeksPost: Item = await getLastWeeksPost();

    const wordsObject: Top10WordsClientObject | undefined =
      await processWordsFromLastWeeksPost(lastWeeksPost);

    res.status(200).json(wordsObject);
  } catch (e) {
    res.status(500).json({ serverResponse: "NOT OK!" });
  }
};

export { getTop10WordsFromLastWeeksPost };
