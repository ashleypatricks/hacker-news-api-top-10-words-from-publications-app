import React, { FC } from "react";

import { Top10WordsClientObject } from "../../Types";

import "./WordList.scss";

type Props = {
  title: string;
  wordsMap: Top10WordsClientObject;
  index: number;
};

const WordList: FC<Props> = ({ title, wordsMap, index }) => {
  return (
    <div className="word-list">
      <h3>{title}</h3>
      {Object.entries(wordsMap).map((key) => (
        <p>{`${key[index]}`}</p>
      ))}
    </div>
  );
};

export default WordList;
