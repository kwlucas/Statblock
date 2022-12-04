import React from "react";

import dndLogo from "../img/dndLogo.png";
import gitHubLogo from "../img/gitHubLogo.png";
import redditLogo from "../img/redditLogo.png";

function FooterNavBar() {
  return (
    <div className="footer-section">
      <ul className="footer-ul">
        <a href="https://www.dndbeyond.com/">
          <img src={dndLogo} alt="DnD Logo" className="dnd-logo" />
        </a>
        <a href="https://github.com/kwlucas/Statblock">
          <img src={gitHubLogo} alt="GitHub Logo" className="github-logo" />
        </a>
        <a href="https://www.reddit.com/">
          <img src={redditLogo} alt="Reddit Logo" className="reddit-logo" />
        </a>
      </ul>
    </div>
  );
}

export default FooterNavBar;
