import * as cheerio from "cheerio";

const webScrape = async (
  hackerNewsHtmlMarkupString: string
): Promise<string> => {
  const $ = cheerio.load(hackerNewsHtmlMarkupString);
  const firstPostId = $(".athing")[0].attribs.id;
  return firstPostId;
};

export { webScrape };
