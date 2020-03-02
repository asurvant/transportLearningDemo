import React from "react";
import QuestionListScreen from "./components/QuestionListScreen";
import AddQuestionScreen from "./components/AddQuestionScreen";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screen: "Question List", questions: [] };
  }

  setScreen = screen => {
    this.setState({ screen });
  };

  addQuestion = () => {
    const restoredSession = JSON.parse(localStorage.getItem("session"));
    if (restoredSession) {
      this.setState({ questions: restoredSession.allQuestions });
    } else {
      this.setState({ questions: [] });
    }
  };

  deleteQuestion = idx => {
    const restoredSession = JSON.parse(localStorage.getItem("session"));
    if (restoredSession) {
      const questions = restoredSession.allQuestions.filter((question, key) => {
        return key !== idx;
      });
      restoredSession.allQuestions = questions;
      localStorage.setItem("session", JSON.stringify(restoredSession));
      this.setState({ questions });
    }
  };

  copyQuestion = idx => {
    const restoredSession = JSON.parse(localStorage.getItem("session"));
    if (restoredSession) {
      const copiedQuestion = restoredSession.allQuestions.find(
        (question, key) => {
          return key === idx;
        }
      );
      restoredSession.allQuestions.push(copiedQuestion);
      localStorage.setItem("session", JSON.stringify(restoredSession));
      this.setState({ questions: restoredSession.allQuestions });
    }
  };

  componentDidMount() {
    this.addQuestion();
  }

  getBodyContent = () => {
    switch (this.state.screen) {
      case "Add Question":
        return (
          <AddQuestionScreen
            setScreen={this.setScreen}
            addQuestion={this.addQuestion}
          />
        );
      case "Question List":
        return (
          <QuestionListScreen
            questions={this.state.questions}
            setScreen={this.setScreen}
            deleteQuestion={this.deleteQuestion}
            copyQuestion={this.copyQuestion}
          />
        );
      default:
        return <div>404!</div>;
    }
  };

  render() {
    return (
      <div style={appContainerStyle}>
        <nav style={navStyle}>{this.state.screen}</nav>
        {this.getBodyContent()}
      </div>
    );
  }
}

const appContainerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const navStyle = {
  background: "linear-gradient(180deg, #31A0E8 0%, #53B3CB 100%)",
  width: "100%",
  padding: "20px",
  color: "white"
};

export default App;
