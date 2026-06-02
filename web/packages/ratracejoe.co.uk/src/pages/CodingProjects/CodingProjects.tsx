import CompSciMathsProject from "./CompSciMathsProject";
import OutreachLab from "./OutreachLab";
import SdqAnalysis from "./SdqAnalysis";
import SportsDay from "./SportsDay";

function CodingProjects() {
  return (
    <main>
      <h1>Coding Projects</h1>
      <p>
        Oddly enough, after a day of programming for a living, I often close
        down my work laptop, open up my MacBook and just...keep going &#x1F604;
      </p>
      <SdqAnalysis />
      <CompSciMathsProject />
      <OutreachLab />
      <SportsDay />
    </main>
  );
}

export default CodingProjects;
