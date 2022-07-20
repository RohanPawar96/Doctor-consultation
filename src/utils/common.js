export const getDateFormat = ({ date, isDateTime = true }) => {
  const stringDate = new Date(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    stringDate
  );
  const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
    stringDate
  );
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    stringDate
  );
  return isDateTime ? `${year}-${month}-${day}` : `${year}-${month}-${day}`;
};

export const showdateFormat = ({ date, isDateTime = true }) => {
  const stringDate = new Date(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    stringDate
  );
  const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
    stringDate
  );
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    stringDate
  );
  return isDateTime ? `${day}/${month}/${year}` : `${day}/${month}/${year}`;
};
