function SportsDay() {
  return (
    <article>
      <h2>Sports Day</h2>
      <p>
        During my time teaching, I observed how manually intensive the
        organisation of sports day was for the PE teachers.
      </p>
      <p>Lots of emails, spreadsheets and bits of paper.</p>
      <p>
        It seemed like an ideal candidate for a computer system, so I started
        working on something. It never really got to a functional point, and
        when I returned to Software Consultancy, this project took on a
        different role.
      </p>
      <p>
        As part of my role as a senior technical consultant, I give talks on
        various aspects of software engineering, and this repo has been my test
        case. I have used it to talk about
      </p>
      <ul>
        <li>TestContainers</li>
        <li>Clean Architecture</li>
        <li>SSL for Local Dev</li>
      </ul>
      <p>
        It is also somewhat deliberate over engineered, using things like Kafka,
        Redis and Keycloak. This is a typical set of power tools I encounter in
        my work projects.
      </p>
      <a href="https://github.com/JoeSharp/sports-day">GitHub Repository</a>
    </article>
  );
}

export default SportsDay;
