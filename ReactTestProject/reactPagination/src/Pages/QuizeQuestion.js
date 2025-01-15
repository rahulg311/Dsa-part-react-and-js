import React, { useState } from "react";
import QuestionData from "./QuestionData";

const QuizeQuestion = () => {
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [next, setNext] = useState(0);

  const data = [
    {
      question: "What is React?",
      options: ["CSS Framework", "React Library"],
      answer: "React Library",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is app + le?",
      options: ["aple", "apple", "leap", "appl"],
      answer: "apple",
    },
  ];


  console.log("next < data.length",next >0  ,data.length)
  const handleAnswerSelection = (val) => {
    setSelectAnswer(val);
    if (val === data[next].answer) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  const handleNextQuestion = () => {
    setNext(next + 1);
    setSelectAnswer(null); // Reset selected answer for the next question
  };
  const handlePreQuestion =()=>{
    if (data[next - 1]?.answer === selectAnswer) {
        setCorrectAnswer(correctAnswer - 1); // Adjust score if navigating back
      }
      setNext(next - 1);
      setSelectAnswer(null); // Reset selected answer for the current question
  }

  return (
    <div className="container my-5">
      {next < data.length ? (
        <>
        <h2 className="text-success">{next+1} / {data.length}</h2>
          <QuestionData
            functions={handleAnswerSelection}
            selectAnswer={selectAnswer}
            data={data[next]}
          />
           <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-secondary"
              onClick={handlePreQuestion}
              disabled={next === 0} // Disable on the first question
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextQuestion}
              disabled={selectAnswer === null} // Disable until an answer is selected
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h1 className="display-4">Quiz Completed!</h1>
          <p className="lead">Your total score is:</p>
          <h2 className="text-success">{correctAnswer} / {data.length}</h2>
        </div>
      )}
    </div>
  );
};


export default QuizeQuestion;




//  child component


// import React from "react";

// const QuestionData = ({ data, functions, selectAnswer }) => {
//   return (
//     <div className="card shadow-sm p-4">
//       <h4 className="mb-4">{data.question}</h4>
//       {data?.options?.map((option, index) => (
//         <div
//           key={index}
//           className={`p-3 mb-2 border rounded ${
//             selectAnswer === option ? "bg-primary text-white" : "bg-light"
//           }`}
//           style={{ cursor: "pointer" }}
//           onClick={() => functions(option)}
//         >
//           <span className="me-3">{index + 1}.</span>
//           {option}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionData;
