import { useState } from "react";
import "./model.css";

const Modal = ({ children }) => {
  const [visible, setVisible] = useState(true);

  const closeHandle = () => {
    setVisible(false);
  };

  const handleConfirm = () => {
    confirm?.();

    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="model-wrapper">
          <div className="model-container">
            <div className="model">
              <div className="model-close ">
                <button onClick={closeHandle}>X</button>
              </div>

              {children}

              <div className="btn-containers ">
                <button onClick={handleConfirm}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
