import React from "react";
import ArticleDate from "../ArticleDate";

type Props = React.PropsWithChildren & {
  date: Date;
  title: string;
};

function DevDiaryPost({ title, date, children }: Props) {
  return (
    <article>
      <ArticleDate date={date} />
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default DevDiaryPost;
