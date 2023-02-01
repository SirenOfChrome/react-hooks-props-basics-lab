import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github} target="github" rel="https://github.com/SirenOfChrome">{github}</a>
      <a href={linkedin} target="_blank" rel="https://www.linkedin.com/in/forrest-jones-b86a24235/">{linkedin}</a>
    </div>
  );
}

export default Links;
