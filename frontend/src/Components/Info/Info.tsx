import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import { Top10WordsClientObject } from "../../Types";

import "./Info.scss";

import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import WordList from "../WordList/WordList";

const Info: FC = () => {
  const [wordsFromLatestStories, setWordsFromLatestStories] =
    useState<Top10WordsClientObject>();
  const [wordsFromLatestPost, setWordsFromLatestPost] =
    useState<Top10WordsClientObject>();

  useEffect(() => {
    const fetchTopWordsFromLatestStories = async () => {
      const {
        data: topTenWordsClientObject,
      }: { data: Top10WordsClientObject } = await axios.get(
        "/stories/toptenwords"
      );
      setWordsFromLatestStories(topTenWordsClientObject);
    };
    fetchTopWordsFromLatestStories();
  }, []);

  useEffect(() => {
    const fetchTopWordsFromLatestPost = async () => {
      const {
        data: topTenWordsClientObject,
      }: { data: Top10WordsClientObject } = await axios.get(
        "/posts/toptenwords"
      );
      setWordsFromLatestPost(topTenWordsClientObject);
    };
    fetchTopWordsFromLatestPost();
  });

  return (
    <div className="container">
      {wordsFromLatestStories && wordsFromLatestPost ? (
        <>
          <div className="colum-container">
            <Card>
              <h2>Top 10 words from last 25 stories</h2>
            </Card>
            <div className="word-list-container">
              <WordList
                title="Words"
                wordsMap={wordsFromLatestStories}
                index={0}
              />
              <WordList
                title="Occurrences"
                wordsMap={wordsFromLatestStories}
                index={1}
              />
            </div>
          </div>
          <div className="colum-container">
            <Card>
              <h2>Top 10 words from last weeks post</h2>
            </Card>
            <div className="word-list-container">
              <WordList
                title="Words"
                wordsMap={wordsFromLatestPost}
                index={0}
              />
              <WordList
                title="Occurrences"
                wordsMap={wordsFromLatestPost}
                index={1}
              />
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Info;
