import React, { useState } from "react";

export default function QuestionTitleContainer(props) {
  const [inputVal, setInputVal] = useState("");

  const handleTitleInput = e => {
    setInputVal(e.target.value);
    props.handleTitleInput(e.target.value);
  };

  return (
    <div style={aqTopContainerStyle}>
      <input
        style={inputStyle}
        onChange={handleTitleInput}
        value={inputVal}
        placeholder="Add/type..."
      />
    </div>
  );
}

const aqTopContainerStyle = {
  width: "100%",
  margin: "10px 0 10px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};

const inputStyle = {
  width: "100%",
  height: "40px"
};
