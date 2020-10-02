import React, { useState } from "react";

import "./ReadMore.scss";

export function ReadMore({ children }) {
  const [open, setOpen] = useState(false);
  const textClass = open ? "read-more_open" : "read-more_close";
  const buttonLabel = open ? "Show less" : "Read more";

  return (
    <div>
      <p className={textClass}>{children}</p>
      <button className="portfolio-button" onClick={() => setOpen(!open)}>
        {buttonLabel}
      </button>
    </div>
  );
}
