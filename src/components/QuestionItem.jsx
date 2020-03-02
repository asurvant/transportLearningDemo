import React from "react";

export default function QuestionItem(props) {
  const handleDeleteClick = e => {
    e.preventDefault();
    props.deleteQuestion(props.idx);
  };

  const handleCopyClick = e => {
    e.preventDefault();
    props.copyQuestion(props.idx);
  };

  return (
    <tr style={mainContainerStyle}>
      <td>{props.data.title || "Untitled"} </td>
      <td>
        <i className="fas fa-eye"></i>
      </td>
      <td>
        <i className="fas fa-pen"></i>
      </td>
      <td>
        <i className="far fa-copy" onClick={handleCopyClick}></i>
      </td>
      <td>
        <i className="fas fa-trash" onClick={handleDeleteClick}></i>
      </td>
    </tr>
  );
}

const mainContainerStyle = {
  borderBottom: "1px solid Gainsboro",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};
