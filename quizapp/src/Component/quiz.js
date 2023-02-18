import "./quiz.css";
import { useState } from "react";
import data from "./mock.json";
function Quiz() {
  const [option, setOption] = useState("");
  const [time, setTime] = useState("3min0s");
  const [question, setQuestion] = useState(0);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState([
    { key: 1, value: 0 },
    { key: 2, value: 0 },
    { key: 3, value: 0 },
    { key: 4, value: 0 },
    { key: 5, value: 0 },
    { key: 6, value: 0 },
    { key: 7, value: 0 },
    { key: 8, value: 0 },
    { key: 9, value: 0 },
    { key: 10, value: 0 },
  ]);
  function handleClick() {
    if (option == data[question].correct_answer) {
      result.splice(question, 1, { key: question + 1, value: 1 });
      setResult(result);
    }
    if (question < 9 && question >= 0) {
      setQuestion(question + 1);
    }
    // alert(`clicked ${question + 1} ${option} ${result}`);
  }
  function handleOperationClick(e) {
    setOption(e);
  }
  function handleCountDown() {
    setStart(true);
    var countDownDate = new Date().getTime() + 3 * 60 * 1000;
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor(distance / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime(`${minutes}min${seconds}s`);
      if (distance < 0) {
        clearInterval(x);
        setFinish(true);
      }
    }, 1000);
  }
  function handleQuestionAdd() {
    if (question < 9 && question >= 0) {
      setQuestion(question + 1);
    }
  }
  function handleQuestionMinus() {
    if (question <= 9 && question > 0) {
      setQuestion(question - 1);
    }
  }

  function handleFinish() {
    setFinish(true)
    let sum = 0;
    result.forEach(function count(item) {
      sum += item.value;
      setScore(sum);
    });
  }

  return (
    <div className="Quiz">
      {!start && (
        <div className="startPage">
          <button
            className="coundDownButton"
            onClick={() => {
              handleCountDown();
            }}
          >
            START THE QUIZ
          </button>
        </div>
      )}
      {finish && (
        <div className="finishPage">
          You have completed the challenge! <br />
          Your results:{score}/10 <br />
          Time used: <br />
        </div>
      )}
      {start && !finish && (
        <div className="QuizApp">
          <div className="QuizHeader">
            <div className="HeaderCount">{question + 1}/10</div>
            <div className="HeaderTimer">{time}</div>
          </div>
          <div className="QuizBody">
            <div className="Question">{data[question].question}</div>
            <div className="quizOption">
              {data[question].options.map((item) => (
                <button
                  value={item}
                  onClick={(e) => handleOperationClick(e.target.value)}
                  className="quizOptionElement"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="quizSubmit">
              <button
                type="button"
                className="btnSubmit"
                onClick={() => handleClick()}
              >
                quizSubmit
              </button>
            </div>
          </div>
          <div className="QuizFooter">
            <div className="QuestionMarkers">
              {result.map((item) => (
                <button
                  key={item.key}
                  className={
                    item.value === 1
                      ? "QuestionMarkerRed"
                      : "QuestionMarkerBlack"
                  }
                >
                  {item.key}
                </button>
              ))}
            </div>
            <button onClick={() => handleQuestionMinus()} className="FooterBtn">
              Last one
            </button>
            <button onClick={() => handleQuestionAdd()} className="FooterBtn">
              Next one
            </button>
            <button onClick={() => handleFinish()} className="FooterBtn">
              finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
