import React, { Component } from "react";
import http from "../services/httpService";
import QuizCard from "./quizCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getQuestionsError,
  getQuestions,
  getQuestionsPending,
} from "../reducers/questions";

class QuizCards extends Component {
  state = {
    questions: [],
    currentQuestion: 0,
    choosedAnswer: null,
  };

  componentDidMount() {
    this.props.fetchQuestions("questions");
  }

  shouldComponentRender = () => {
    const { questions, pending } = this.props;

    if (pending === false && questions.length) return true;
    // more tests
    return false;
  };

  handleClick = (question, answer) => {
    const { currentQuestion } = this.state;

    const answerIndex = question.answers.indexOf(answer);
    this.setState({
      choosedAnswer: answerIndex,
      questionStatus:
        answerIndex == question.correctAnswer
          ? "Correct answer! :)"
          : "Wrong answer! :(",
    });

    setTimeout(() => {
      this.setState({
        choosedAnswer: null,
        currentQuestion: currentQuestion + 1,
      });
    }, 5000);
  };

  showAnswerStyles = (question, answer) => {
    const { choosedAnswer } = this.state;

    if (choosedAnswer !== null && question.correctAnswer == answer) {
      return "btn btn-outline-success m-2";
    } else if (choosedAnswer !== null && question.correctAnswer !== answer) {
      return "btn btn-outline-danger m-2";
    } else {
      return "btn btn-outline-secondary m-2";
    }
  };

  render() {
    const { questions } = this.props;

    if (!this.shouldComponentRender()) return null;

    const { currentQuestion, questionStatus, choosedAnswer } = this.state;

    return (
      <div>
        <QuizCard
          question={questions[currentQuestion]}
          onClick={this.handleClick}
          choosedAnswer={choosedAnswer}
          questionStatus={questionStatus}
          showAnswerStyles={this.showAnswerStyles}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getQuestionsError(state),
  questions: getQuestions(state),
  pending: getQuestionsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchQuestions: http.get,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizCards);
