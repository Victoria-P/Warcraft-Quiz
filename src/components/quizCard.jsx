import React from "react";

const QuizCard = ({
  question,
  onClick,
  choosedAnswer,
  questionStatus,
  showAnswerStyles,
}) => {
  return (
    <div className="card">
      <div className="card-header">{question.question}</div>
      <div className="card-body">
        <h5 className="card-title">
          {choosedAnswer !== null ? questionStatus : "Choose your answer"}
        </h5>
        <span className="card-text">
          {question.answers.map((answer, index) => (
            <div key={question.answers.indexOf(answer)}>
              <button
                onClick={() => onClick(question, answer)}
                type="button"
                disabled={choosedAnswer !== null}
                className={showAnswerStyles(question, index)}
              >
                {answer}
              </button>
              <br />
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default QuizCard;
