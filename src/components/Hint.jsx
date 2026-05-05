import React, { useState } from "react";
import HintStage from "../routes/HintStage";

function Hint(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleOpen = () => {
    if (props.solved) {
      setShowPreview(true);
      return;
    }

    if (props.unlocked) {
      setIsOpen(true);
    }
  };

  const imageSrc = props.unlocked
    ? props.image
    : "/img/locked-icon.jpg";

  return (
    <>
      <div className="grid-item">
        <button onClick={handleOpen}>
          <div className="hint-image-wrapper">
            <img src={imageSrc} alt="hint" />

            <div className="hint-overlay">
              <h3>{props.message}</h3>
            </div>
          </div>
        </button>

        {props.solved && (
          <div className="icon">
            <img src="/img/award-icon.png" alt="award" />
          </div>
        )}
      </div>

      {isOpen && (
        <HintStage
          {...props}
          showHint={setIsOpen}
          values={props.values}
        />
      )}

      {showPreview && (
        <div className="popup active" onClick={() => setShowPreview(false)}>
          <div className="popup-content">
            <img src={props.image} alt="preview" />
          </div>
        </div>
      )}
    </>
  );
}

export default Hint;