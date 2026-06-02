import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div>
      <h1>Blog</h1>

      <BlogPost
        title="The Indie Web"
        date={new Date("2026-05-31T14:05:00")}
        content="I recently watched a video about the Indie Web, and it inspired me to
          create this site as a way to share my work and connect with others. I
          remember the internet of the 90s, there was an excitement, a chaos and
          an individuality that I want to be part of again. Social Media largely
          homogenised the web, and that was it's own kind of fun for a while;
          but the AI slop machines have rendered these sites useless."
      />
      <BlogPost
        title="Software Ageing"
        date={new Date("2026-06-02T08:00:00")}
        content="I have revisited my comp sci maths code, and it has reiterated to me how much software ages like milk when left untouched.
        The code itself may be fine, but in uplifting its dependencies, it is clearly going to need a lot of love before it builds and runs again.
        I deliberately tried not to use third party dependencies,
        but even just the rules of TypeScript itself have moved on.
        I'm all in favour of strictness but its always a challenge when
        I work to a set of constraints, generate a large amount of code, and then apply further constraints.
        Specifically it seems that the way null/undefined is treated has gotten stricter."
      />
    </div>
  );
}
export default Blog;
