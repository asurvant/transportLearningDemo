import React from "react";
import AnswerOptionsContainer from "./AnswerOptionsContainer";
import QuestionTrayContainer from "./QuestionTrayContainer";
import QuestionTitleContainer from "./QuestionTitleContainer";

class AddQuestionScreen extends React.Component {
  state = {
    inputVal: "",
    title: "",
    answers: [],
    correctChoices: [],
    questions: []
  };

  addToLocalStorage = () => {
    const restoredSession = JSON.parse(localStorage.getItem("session"));
    if (restoredSession) {
      restoredSession.allQuestions.push({ ...this.state });
      localStorage.setItem("session", JSON.stringify(restoredSession));
    } else {
      const session = { allQuestions: [{ ...this.state }] };
      localStorage.setItem("session", JSON.stringify(session));
    }
    this.props.addQuestion();
    this.props.setScreen("Question List");
  };

  updateAnswerOptionsContainer = e => {
    this.setState({ answers: e });
  };

  handleQuestionTrayInput = input => {
    let questions = this.state.questions;
    for (const key in input) {
      questions[key] = input[key];
    }
    this.setState({ questions });
  };

  handleQuestionTitleInput = title => {
    this.setState({ title });
  };

  handleAnswerOptionsContainerInput = input => {
    let answers = this.state.answers;
    for (const key in input) {
      answers[key] = input[key];
    }
    this.setState({ answers });
  };

  handleChoicesCheckbox = input => {
    let correctChoices = this.state.correctChoices;
    for (const key in input) {
      correctChoices[key] = key;
    }
    this.setState({ correctChoices });
  };

  render() {
    return (
      <div style={aqMainContainerStyle}>
        <QuestionTitleContainer
          handleTitleInput={this.handleQuestionTitleInput}
        />
        <div style={aqMiddleContainerStyle}>
          <div style={midInstructionsStyle}>Type Instructions Here</div>
          <div style={midContentContainerStyle}>
            <AnswerOptionsContainer
              updateAnswerOptionsContainer={this.updateAnswerOptionsContainer}
              handleAnswerOptionsInput={this.handleAnswerOptionsContainerInput}
              handleChoicesCheckbox={this.handleChoicesCheckbox}
            />
            <div style={midContentRightContainerStyle}>
              <div style={midContentElStyle}>Pick content</div>
              <QuestionTrayContainer
                handleQuestionTrayInput={this.handleQuestionTrayInput}
              />
            </div>
          </div>
        </div>
        <div>
          <button onClick={this.addToLocalStorage}>Add</button>
        </div>
      </div>
    );
  }
}

export default AddQuestionScreen;

const aqMainContainerStyle = {
  width: "60%",
  height: "80vh",
  display: "flex",
  flexDirection: "column"
};

const midInstructionsStyle = {
  height: "10%"
};
const midContentContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "100%"
};

const midContentRightContainerStyle = {
  background: "Gainsboro",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "70%"
};
const midContentElStyle = {
  background: "teal",
  height: "80%"
};

const aqMiddleContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: "100%",
  height: "80%",
  background: "white",
  color: "#000",
  boxShadow:
    "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"
};
