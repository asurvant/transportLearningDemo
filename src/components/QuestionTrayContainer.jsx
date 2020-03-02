import React, { useState } from "react";
import QuestionTray from "./QuestionTray";
import Modal from "react-modal";
import tray1 from "../images/tray-1.png";
import tray2 from "../images/tray-2.png";
import tray3 from "../images/tray-3.png";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

export default function QuestionTrayContainer(props) {
  const [showModal, setShowModal] = useState(false);
  const [trayCount, setTrayCount] = useState(0);
  const [inputVal, setInputVal] = useState({});

  const makeHandleInputFunction = idx => {
    return e => {
      const newState = { ...inputVal, [idx]: e.target.value };
      props.handleQuestionTrayInput(newState);
      setInputVal(newState);
    };
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onClickHandler = e => {
    return () => {
      setTrayCount(e);
      setShowModal(false);
    };
  };

  const getModalBody = () => {
    return (
      <div>
        <img
          src={tray1}
          alt="one correct answer tray"
          onClick={onClickHandler(1)}
        />
        <img
          src={tray2}
          alt="two correct answer trays"
          onClick={onClickHandler(2)}
        />
        <img
          src={tray3}
          alt="three correct answer trays"
          onClick={onClickHandler(3)}
        />
      </div>
    );
  };

  if (trayCount > 0) {
    const ansOpts = [];

    for (let i = 0; i < trayCount; i++) {
      ansOpts.push(
        <QuestionTray key={i} handleInput={makeHandleInputFunction(i)} />
      );
    }

    return <div style={mainTrayContainerStyle}>{ansOpts}</div>;
  } else {
    return (
      <div style={mainTrayContainerEmptyStyle}>
        <div onClick={handleOpenModal} style={modalCloseDiv}></div>
        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          style={modalStyle}
        >
          {getModalBody()}
        </Modal>
      </div>
    );
  }
}

const modalCloseDiv = {
  width: "100%",
  height: "100%"
};

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const mainTrayContainerStyle = {
  display: "flex",
  flexDirection: "row",
  height: "20%",
  margin: "5px"
};

const mainTrayContainerEmptyStyle = {
  height: "20%",
  border: "2px dashed #48add5",
  background: "#ebf5fd",
  margin: "5px"
};
