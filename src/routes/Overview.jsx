import { useState, useEffect } from "react";
import "../css/Overview.css";
import Hint from "../components/Hint";
import { storage } from "../Storage";
import initData from "../data/hints";

function Overview() {
  const [hints, setHints] = useState([]);

  const loadHints = () => {
    const storedHints = storage.get("hints") || [];
    setHints(storedHints);
  };

  useEffect(() => {
    loadHints();
  }, []);

  const handleReset = () => {
    storage.remove("hints");
    storage.remove("lockPassword");
    storage.remove("lockHint");
    storage.remove("version");

    initData();
    loadHints();
  };

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

      <div className="dev-panel">
        <button
          className="danger"
          onClick={() => {
            if (window.confirm("¿Seguro que quieres borrar todo el progreso?")) {
              handleReset();
            }
          }}
        >
          Borrar progreso
        </button>
      </div>
    </div>
  );
}

export default Overview;