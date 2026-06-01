function formatDate(date: Date) {
  return date.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function ArticleDate({ date }: { date: Date }) {
  const formattedDate = formatDate(date);
  return <p className="article-date">{formattedDate}</p>;
}

export default ArticleDate;
