import React from "react";
import QuestionItem from "./QuestionItem";

class QuestionListScreen extends React.Component {
  state = {
    inputVal: ""
  };

  handleAddQuestionClick = () => {
    this.props.setScreen("Add Question");
  };

  componentDidMount() {
    this.setState({ questions: this.props.questions });
  }

  handleSearchInput = e => {
    this.setState({ inputVal: e.target.value });
  };

  createDeleteQuestionItem = idx => {
    return () => {};
  };

  getFilteredQuestions = () => {
    return this.props.questions
      .filter(q => {
        return q.title.includes(this.state.inputVal.toLowerCase());
      })
      .map((question, idx) => {
        return (
          <QuestionItem
            data={question}
            key={idx}
            idx={idx}
            deleteQuestion={this.props.deleteQuestion}
          />
        );
      });
  };

  getAllQuestions = () => {
    return this.props.questions.map((question, idx) => {
      return (
        <QuestionItem
          data={question}
          key={idx}
          idx={idx}
          deleteQuestion={this.props.deleteQuestion}
          copyQuestion={this.props.copyQuestion}
        />
      );
    });
  };

  render() {
    const questions =
      this.state.inputVal.length > 0
        ? this.getFilteredQuestions()
        : this.getAllQuestions();

    return (
      <div style={qlMainContainerStyle}>
        <div style={addSearchContainerStyle}>
          <button
            onClick={this.handleAddQuestionClick}
            style={addQuestionButtonStyle}
          >
            Add a Question
          </button>
          <input
            style={searchInputStyle}
            onChange={this.handleSearchInput}
            value={this.inputVal}
            placeholder=" Search..."
          />
        </div>

        <table style={questionsContainerStyle}>
          <thead style={headerStyle}>
            <tr>
              <td>Name</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody style={questionItemContainerStyle}>{questions}</tbody>
          <tfoot style={footerStyle}>
            <tr>
              <td>Items per page: 30</td>
            </tr>
          </tfoot>
        </table>

        <div style={liveButtonContainer}>
          <button style={viewButtonStyle}>View Questions Live</button>
        </div>
      </div>
    );
  }
}

export default QuestionListScreen;

const qlMainContainerStyle = {
  width: "60%",
  display: "flex",
  flexDirection: "column"
};

const addSearchContainerStyle = {
  width: "100%",
  margin: "10px 0 10px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};

const addQuestionButtonStyle = {
  width: "30%",
  height: "40px",
  background: "#279af1",
  color: "white"
};

const searchInputStyle = {
  width: "65%",
  height: "40px",
  padding: "0",
  borderWidth: "0"
};

const questionsContainerStyle = {
  width: "100%",
  background: "white",
  color: "#000",
  boxShadow:
    "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"
};

const questionItemContainerStyle = {
  display: "flex",
  flexDirection: "column"
};

const liveButtonContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end"
};

const viewButtonStyle = {
  width: "220px",
  height: "40px",
  background: "#279af1",
  color: "white",
  margin: "10px"
};

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  borderBottom: "1px solid Gainsboro"
};

const footerStyle = {
  display: "flex",
  flexDirection: "row"
};
