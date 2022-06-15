import { wordCounter } from "../../utils";
import { Top10WordsClientObject } from "../../types";

const wordsFromLast25Stories: string =
  "Solar Clock / Solar Tracker Apple Faces German Antitrust Probe for iOS Privacy Changes Newsy: Turn Your Unused Domain Name into a Complete Web Application Shannon Entropy from Theory to Python Custom data placement API (in SQL) in TiDB Lindsey Graham: One-State Solution Is ‘Dangerous’ and ‘Crazy’ Crypto Firms Quake as Prices Fall Crypto Lender Celsius Hires Restructuring Lawyers After Account Freeze Senator Says Amazon Ring Audio Surveillance Capabilities “Threaten the Public” The Latecomer’s Guide to Crypto Crashing: a map of where we are and what’s ahead Reimagining Apple's Bauhaus OS (2021) What car should I buy? The Stock Market at the End of the World Celsius and stETH – A Lesson on (il)Liquidity Debugging an empty spam email (2016) How the U.S. Hides Casualties in War Hire (or Outsource tasks to) pre-screened African dev talents with Alvative IPC: Posix Message Queues (2016) Sean Suiter ECHR blocks UK’s ‘migrant’ plan: Rwanda flight halted White House has security concerns about any deal for NSO hacking tools Dish Demands SpaceX Deactivate Starlink Dishes Used on Moving Boats and Cars Remote workers: What issues have you faced with travel/relocation? Visualize profiles in Grafana with Pyroscope Flamegraph plugin Layoffs.fyi";

const top10WordsFromLast25StoriesObject: Top10WordsClientObject = {
  "2016": 2,
  for: 2,
  Apple: 2,
  Solar: 2,
  with: 3,
  Crypto: 3,
  to: 3,
  the: 4,
  and: 4,
  in: 4,
};

test("Word Counter function should return the top 10 occurring words from the last 25 stories", () => {
  const top10WordsObject: Top10WordsClientObject = wordCounter(
    wordsFromLast25Stories
  );
  expect(top10WordsObject.Crypto).toEqual(
    top10WordsFromLast25StoriesObject.Crypto
  );
});
