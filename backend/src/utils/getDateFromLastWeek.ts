const getDateFromLastWeek = async (): Promise<string> => {
  const dateToday = new Date();
  const dateLastWeek = new Date(dateToday.getTime() - 7 * 24 * 60 * 60 * 1000);
  const urlDate = dateLastWeek.toISOString().slice(0, 10);
  return urlDate;
};

export { getDateFromLastWeek };
