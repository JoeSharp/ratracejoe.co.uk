import ArticleDate from "../ArticleDate";

type Props = {
  date: Date;
  content: string;
};

function BlogPost({ date, content }: Props) {
  return (
    <article>
      <ArticleDate date={date} />
      <h3>The Indie Web </h3>
      <p>{content}</p>
    </article>
  );
}

export default BlogPost;
