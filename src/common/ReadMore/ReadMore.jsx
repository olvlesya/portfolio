import React, { useState } from "react";

import "./ReadMore.scss";

export function ReadMore({ children }) {
  const [open, setOpen] = useState(true);
  const textClass = open ? "read-more_open" : "read-more_close";
  const buttonLabel = open ? "Show less" : "Read more";

  return (
    <div>
      <p className={`read-more ${textClass}`}>{children}</p>
      <button className="portfolio-button" onClick={() => setOpen(!open)}>
        {buttonLabel}
      </button>
    </div>
  );
}
