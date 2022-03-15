import React from "react";

const Modal = ({ id , contents}) => {
  return (
    <div id={id} className="modal">
      <div className="modal-container">
        {contents}
      </div>
    </div>
  );
};

export default Modal;
