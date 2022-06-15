import { getDateFromLastWeek } from "../../utils";

test("Should return a matching date from last week", async () => {
  const oneDay = 1000 * 60 * 60 * 24;
  const todaysDate = new Date().toISOString().slice(0, 10);
  const lastWeeksDate = await getDateFromLastWeek();
  const differenceInTime =
    new Date(todaysDate).getTime() - new Date(lastWeeksDate).getTime();
  const differenceInDays = Math.round(differenceInTime / oneDay);

  expect(differenceInDays).toEqual(7);
});
