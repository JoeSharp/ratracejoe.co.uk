function formatDate(date: Date) {
  return date.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleDate({ date }: { date: Date }) {
  const formattedDate = formatDate(date);
  return <p className="article-date">{formattedDate}</p>;
}

export default ArticleDate;
