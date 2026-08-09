import DevDiaryPost from "./DevDiaryPost";

function DevDiary() {
  return (
    <div>
      <h1>Development Diary</h1>
      <p>
        I'm in a burst of activity on this site as I establish its basic
        contents. So for now, I will record each step as I explore different
        things I can build and publish.
      </p>
      <DevDiaryPost title="Outreach Lab" date={new Date("2026-08-09T08:00:00")}>
        <p>
          I have finally gotten the outreach lab to where I wanted it. Full
          HTTPS access, using custom sub domains. Developer tools installed.
        </p>
      </DevDiaryPost>
      <DevDiaryPost title="WASM Canvas" date={new Date("2026-06-06T08:00:00")}>
        <p>
          I now have my Game of Life simulator working via WASM. For my initial
          WASM experiments, I was just using the WASM library as a data model
          with computation. I started looking to wrap my 'Go' implementation but
          then realised how many nonsensical wrapper structs I&apos;d need.
          Since I do not want to pollute my original library with WASM bindings.
        </p>
        <p>
          I used Copilot to get me through doing this another way, handing a
          canvas to WASM and letting it do all the work. Today I just have Game
          of Life going, since that requires no interaction. It is alive!
        </p>
      </DevDiaryPost>

      <DevDiaryPost title="WASM" date={new Date("2026-06-04T08:00:00")}>
        <p>
          Over the last couple of days I've been playing with WASM. I have
          managed to link up an existing Rust repository that I wrote to learn
          the language. It currently contains various half baked implementations
          of simple games. The main one I spent good time on was 'Go', so I plan
          to create a full working web version, using the Rust compiled to WASM
          as the backend....just because I can!
        </p>
        <p>
          Today I have also started playing with graphics, so you might notice
          small rat heads flying around. Drawing is not a strength of mine, but
          I just don't want to start using AI generated image. So....rough
          looking pixel art is what you get.
        </p>
      </DevDiaryPost>
      <DevDiaryPost
        title="Software Ageing"
        date={new Date("2026-06-02T08:00:00")}
      >
        <p>
          I have revisited my comp sci maths code, and it has reiterated to me
          how much software ages like milk when left untouched. The code itself
          may be fine, but in uplifting its dependencies, it is clearly going to
          need a lot of love before it builds and runs again.
        </p>
        <p>
          I deliberately tried not to use third party dependencies, but even
          just the rules of TypeScript itself have moved on. Specifically it
          seems that the way null/undefined is treated has gotten stricter.
        </p>
      </DevDiaryPost>
      <DevDiaryPost
        title="The Indie Web"
        date={new Date("2026-05-31T14:05:00")}
      >
        <p>
          I recently watched a video about the Indie Web, and it inspired me to
          create this site as a way to share my work and connect with others. I
          remember the internet of the 90s, there was an excitement, a chaos and
          an individuality that I want to be part of again. Social Media largely
          homogenised the web, and that was it's own kind of fun for a while;
          but the AI slop machines have rendered these sites useless.
        </p>
      </DevDiaryPost>
    </div>
  );
}
export default DevDiary;
