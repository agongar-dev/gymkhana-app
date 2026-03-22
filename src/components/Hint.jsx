import React, { useState } from "react";
import HintStage from "../routes/HintStage";

function Hint(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
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
          <img src={imageSrc} alt="hint" />
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
    </>
  );
}

export default Hint;