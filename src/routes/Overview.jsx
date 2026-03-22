import React, { useState, useEffect } from "react";
import "../css/Overview.css";
import Hint from "../components/Hint";
import { storage } from "../Storage";

function Overview() {
  const [hints, setHints] = useState([]);

  const loadHints = () => {
    const storedHints = storage.get("hints") || [];
    setHints(storedHints);
  };

  useEffect(() => {
    loadHints();
  }, []);

  return (
    <div className="container">
      <div className="grid-container">
        {hints.map((hint) => (
          <Hint
            key={hint.id}
            {...hint}
            values={loadHints}
          />
        ))}
      </div>
    </div>
  );
}

export default Overview;