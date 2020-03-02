import React, { useState } from "react";
import Modal from "react-modal";
import AnswerOptionItem from "./AnswerOptionItem";
import answer2 from "../images/answer-2.png";
import answer3 from "../images/answer-3.png";
import answer4 from "../images/answer-4.png";
import answer5 from "../images/answer-5.png";
import answer6 from "../images/answer-6.png";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

export default function AnswerOptionsContainer(props) {
  const [answerOptions, setAnswerOptions] = useState(0);
  const [checkboxVals, setcheckboxVals] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [inputVal, setInputVal] = useState({});

  const makeHandleInputFunction = idx => {
    return e => {
      const newState = { ...inputVal, [idx]: e.target.value };
      props.handleAnswerOptionsInput(newState);
      setInputVal(newState);
    };
  };

  const makeCheckboxHandler = idx => {
    return e => {
      const temp = checkboxVals;
      if (temp[idx] === undefined) {
        temp[idx] = true;
      } else {
        temp[idx] = !temp[idx];
      }
      setcheckboxVals(temp);
      props.handleChoicesCheckbox(temp);
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
      setAnswerOptions(e);
      setShowModal(false);
    };
  };

  const getModalBody = () => {
    return (
      <div>
        <img
          src={answer2}
          alt="two answer options"
          onClick={onClickHandler(2)}
        />
        <img
          src={answer3}
          alt="three answer options"
          onClick={onClickHandler(3)}
        />
        <img
          src={answer4}
          alt="four answer options"
          onClick={onClickHandler(4)}
        />
        <img
          src={answer5}
          alt="five answer options"
          onClick={onClickHandler(5)}
        />
        <img
          src={answer6}
          alt="six answer options"
          onClick={onClickHandler(6)}
        />
      </div>
    );
  };

  if (answerOptions > 0) {
    const ansOpts = [];

    for (let i = 0; i < answerOptions; i++) {
      ansOpts.push(
        <AnswerOptionItem
          idx={i}
          key={i}
          inputVal={inputVal[i] || ""}
          handleCheckbox={makeCheckboxHandler(i)}
          handleInput={makeHandleInputFunction(i)}
        />
      );
    }

    return <div style={mainContainerStyle}>{ansOpts}</div>;
  } else {
    return (
      <div style={mainContainerEmptyStyle}>
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

const mainContainerEmptyStyle = {
  height: "90%",
  width: "30%",
  border: "2px dashed #48add5",
  background: "#ebf5fd",
  margin: "5px"
};
const mainContainerStyle = {
  height: "100%",
  width: "30%",
  display: "flex",
  flexDirection: "column"
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
