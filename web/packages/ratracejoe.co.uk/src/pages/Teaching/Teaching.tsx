import SvgDemo from "./SvgDemo";

function Teaching() {
  return (
    <div>
      <h1>Teaching Computer Science</h1>
      <p>
        During my rather brief tenure as a secondary school teacher, I created a
        set of resources to bring the Computer Science A Level to life.
      </p>
      <p>
        Previously I used p5.js for the drawing, but there is quite a bit
        impedance mismatch between p5.js and React. The effectively fight over
        control. I'm going to write entirely new code to render all the
        algorithms, but use SVG and drive it directly from React using things
        like `requestAnimationFrame`.
      </p>
      <SvgDemo />
    </div>
  );
}

export default Teaching;
