import React, { useState } from "react";
import "./ReadMore.scss";

export function ReadMore({ children }) {
  const [status, setOpen] = useState(false);
  return (
    <div>
      <div className={status ? "" : "read-more_hidden"}>{children}</div>
      <button onClick={() => setOpen(!status)} className="portfolio-button">
        ReadMore
      </button>
    </div>
  );
}
