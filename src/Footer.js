limport React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by{" "}
        <a
          href="https://https://ellelynn.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Elle Lynn</strong>
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/ElleLynn08/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://define-that-dictionary-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
