import ArticleDate from "../ArticleDate";

type Props = {
  date: Date;
  title: string;
  content: string;
};

function BlogPost({ title, date, content }: Props) {
  return (
    <article>
      <ArticleDate date={date} />
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
}

export default BlogPost;
