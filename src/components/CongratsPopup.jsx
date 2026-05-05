import React, { useState } from "react";
import "../css/HintStage.css";
import "../css/LockStage.css";
import { storage } from "../Storage";

function CongratsPopup({ id, showHint, setShowCongrats }) {
  const [inputs, setInputs] = useState([]);
  const [lockSolved, setLockSolved] = useState(false);

  const hints = storage.get("hints");
  const nextHint = hints.find((hint) => hint.id === id + 1);
  const lockPassword = storage.get("lockPassword");

  const handleClose = () => {
    showHint(false);
  };

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const validatePassword = () => {
    if (inputs.length !== lockPassword.length) {
      alert("Completa todos los campos");
      return false;
    }

    return inputs.every(
      (value, index) => Number(value) === lockPassword[index].passKey
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      alert("Casi! Seguid intentándolo");
      return;
    }

    setLockSolved(true);
    showHint(false);
  };

  // Final lock challenge
  if (!nextHint) {
    return (
      <>
        <form className="lock-container" onSubmit={handleSubmit}>
          <div className="lock">
            {lockPassword.map((item, index) => (
              <input
                key={item.id}
                className="lock-num"
                style={{ backgroundColor: item.color }}
                type="number"
                min="0"
                max="9"
                required
                value={inputs[index] || ""}
                onChange={(e) =>
                  handleInputChange(e.target.value, index)
                }
              />
            ))}
          </div>

          <button type="submit" className="lock-hook">
            <span className="lock-hook-text">Abrir</span>
          </button>
        </form>

        {lockSolved && (
          <div className="popup active">
            <div className="popup-content">
              <p>
                ¡Lo conseguisteis! <br />
                ¡¡¡Enhorabuena!!! <br />
                El tesoro está donde Ari sueña despierta y habla dormida...
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="popup active">
      <div className="popup-content">
        <h2>
          ¡Felicidades! <br />
          Lo estáis haciendo genial
        </h2>

        <p>La siguiente prueba está aquí.</p>

        <img
          className="next-hint-photo"
          src={nextHint.image}
          alt="next hint"
        />

        <button
          onClick={() => {
            setShowCongrats(false);
            handleClose();
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default CongratsPopup;