import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div>
      <h2>Blog</h2>

      <BlogPost
        date={new Date("2026-05-31T14:05:00")}
        content="I recently watched a video about the Indie Web, and it inspired me to
          create this site as a way to share my work and connect with others. I
          remember the internet of the 90s, there was an excitement, a chaos and
          an individuality that I want to be part of again. Social Media largely
          homogenised the web, and that was it's own kind of fun for a while;
          but the AI slop machines have rendered these sites useless."
      />
    </div>
  );
}
export default Blog;
