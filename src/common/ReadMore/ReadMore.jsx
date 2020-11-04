import React, { useState } from "react";
import { readMoreHidden } from "./ReadMore.module.scss";

export function ReadMore({ children }) {
  const [status, setOpen] = useState(false);
  return (
    <div>
      <div className={status ? "" : readMoreHidden}>{children}</div>
      {!status && (
        <button onClick={() => setOpen(!status)} className="portfolio-button">
          ReadMore
        </button>
      )}
    </div>
  );
}
