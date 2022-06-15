import { Occurrences, SortedWords, Top10WordsClientObject } from "../types";

const wordCounter = (words: string) => {
  const wordsProcessed = words.match(/\w+/g);

  let occurrences: Occurrences = {};

  for (let wordProcessed of wordsProcessed!) {
    if (occurrences[wordProcessed] && wordProcessed.length > 1)
      occurrences[wordProcessed]++;
    else occurrences[wordProcessed] = 1;
  }

  let sortedTop10Words: SortedWords = [];
  for (let actualWord in occurrences) {
    sortedTop10Words.push([actualWord, occurrences[actualWord]]);
  }

  let top10WordsClientObject: Top10WordsClientObject = {};

  sortedTop10Words
    .sort(
      (a: (string | number)[], b: (string | number)[]) =>
        (b[1] as number) - (a[1] as number)
    )
    .splice(0, 10)
    .reverse()
    .forEach((item) => {
      top10WordsClientObject[item[0]] = item[1];
    });

  return top10WordsClientObject;
};

export { wordCounter };
