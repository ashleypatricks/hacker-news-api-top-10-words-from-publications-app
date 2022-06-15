import { Request, Response, NextFunction } from "express";
import { Top10WordsClientObject } from "../../types";
const getTop10WordsFromLastWeeksPost = require("../../controllers/posts");

const top10WordsClientObject: Top10WordsClientObject = {
  wordOne: 2,
  wordTwo: 4,
  wordThree: 4,
  wordFour: 3,
  wordFive: 2,
  wordSix: 1,
  wordSeven: 1,
  wordEight: 2,
  wordNine: 3,
  wordTen: 9,
};

jest.mock("../../controllers/posts.ts", () => {
  return jest.fn(() => top10WordsClientObject);
});

test("Posts controller should return the top 10 occurring words from last weeks post", async () => {
  const responseObject: Top10WordsClientObject =
    await getTop10WordsFromLastWeeksPost(
      {} as Request,
      {} as Response,
      {} as NextFunction
    );
  expect(responseObject).toBeTruthy();
});
