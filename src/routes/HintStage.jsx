import React, { useState } from "react";
import "../css/HintStage.css";
import { storage } from "../Storage";
import CongratsPopup from "../components/CongratsPopup";

function HintStage(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);
  const [answer, setAnswer] = useState("");

  const closeHint = () => setIsVisible(false);

  const handleSuccess = () => {
    setShowCongrats(false);
    setIsVisible(false);
  };

  const checkAnswer = () => {
    if (answer.trim().toUpperCase() !== props.answer) {
      alert("Respuesta incorrecta, seguid intentándolo");
      return;
    }

    const hints = storage.get("hints");
    const hintIndex = hints.findIndex((hint) => hint.id === props.id);

    const updatedHints = hints.map((hint, index) => {
      if (index === hintIndex) {
        return { ...hint, solved: true };
      }

      if (index === hintIndex + 1) {
        return { ...hint, unlocked: true };
      }

      return hint;
    });

    storage.set("hints", updatedHints);

    setShowCongrats(true);
    props.values(); // refrescar overview
  };

  return (
    <>
      {isVisible && (
        <div className="hint-stage active">
          <button onClick={closeHint} className="close-button">
            X
          </button>

          <h1>{props.message}</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkAnswer();
            }}
          >
            <label htmlFor="answer">Respuesta</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button type="submit">Comprobar</button>
          </form>
        </div>
      )}

      {showCongrats && (
        <CongratsPopup
          {...props}
          setShowCongrats={handleSuccess}
          showHint={setIsVisible}
        />
      )}
    </>
  );
}

export default HintStage;