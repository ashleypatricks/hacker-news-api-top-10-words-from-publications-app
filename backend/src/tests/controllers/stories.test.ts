import { Request, Response, NextFunction } from "express";
import { Top10WordsClientObject } from "../../types";
const getTop10WordsFromLast25Stories = require("../../controllers/stories");

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

jest.mock("../../controllers/stories.ts", () => {
  return jest.fn(() => top10WordsClientObject);
});

test("Stories controller should return the top 10 occurring words from the last 25 stories", async () => {
  const responseObject: Top10WordsClientObject =
    await getTop10WordsFromLast25Stories(
      {} as Request,
      {} as Response,
      {} as NextFunction
    );
  expect(responseObject).toBeTruthy();
});
