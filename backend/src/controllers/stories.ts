import { RequestHandler } from "express";
import { processWordsFromLast25Stories } from "../utils";
import { Top10WordsClientObject } from "../types";

const getTop10WordsFromLast25Stories: RequestHandler = async (_, res) => {
  try {
    const wordsObject: Top10WordsClientObject | undefined =
      await processWordsFromLast25Stories();

    res.status(200).json(wordsObject);
  } catch (e) {
    console.error(e);
    res.status(500).json({ serverMessage: "Something Went Wrong!" });
  }
};

export { getTop10WordsFromLast25Stories };
