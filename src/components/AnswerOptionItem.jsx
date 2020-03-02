import React from "react";

export default function AnswerOptionItem(props) {
  return (
    <div key={props.i} style={staticCardStyle}>
      <label style={checkboxStyle}>
        <input
          type="checkbox"
          id={`correct-checkbox-${props.i}`}
          value="Correct"
          onChange={props.handleCheckbox}
        />
        Correct
      </label>

      <input
        style={answerTextInputStyle}
        onChange={props.handleInput}
        value={props.inputVal}
        placeholder="type answer here"
      />
    </div>
  );
}

const staticCardStyle = {
  boxShadow: "rgba(11, 9, 13, .25) 2px 2px 4px",
  background: "linear-gradient(180deg, #6360a2 0, #6f67ac 100%)",
  color: "#fff",
  borderRadius: "5px",
  flexGrow: "1",
  margin: "5px"
};

const checkboxStyle = {
  userSelect: "none"
};

const answerTextInputStyle = {
  width: "100%",
  height: "40%",
  fontSize: "1em",
  color: "white",
  border: "0",
  outline: "none",
  background: "transparent",
  boxSizing: "border-box",
  position: "relative",
  top: "50%",
  left: "20%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)"
};
