import React from "react";

export default function QuestionTray(props) {
  return (
    <div key={props.i} style={trayStyle}>
      <input
        style={questionTextInputStyle}
        onChange={props.handleInput}
        value={props.inputVal}
        placeholder="type question here"
      />
    </div>
  );
}

const trayStyle = {
  boxShadow: "rgba(11, 9, 13, .25) 2px 2px 4px",
  background: "white",
  color: "Gainsboro",

  borderRadius: "5px",
  flexGrow: "1",

  margin: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const questionTextInputStyle = {
  fontSize: "1em",
  border: "0",
  outline: "none",
  background: "transparent",
  boxSizing: "border-box"
};
