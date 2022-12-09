import React, { useState } from "react";

const QuizComp = () => {
  const [showresult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
      options: [
        { id: 0, text: "1850s", isCorrect: false },
        { id: 1, text: "1880s", isCorrect: true },
        { id: 2, text: "1930s", isCorrect: false },
        { id: 3, text: "1950s", isCorrect: false },
      ],
    },
    {
      text: "What is part of a database that holds only one type of information?",
      options: [
        { id: 0, text: "Report", isCorrect: false },
        { id: 1, text: "Field", isCorrect: true },
        { id: 2, text: "Record", isCorrect: false },
        { id: 3, text: "File", isCorrect: false },
      ],
    },
    {
      text: "'OS' computer abbreviation usually means ?",
      options: [
        { id: 0, text: "Order of Significance", isCorrect: false },
        { id: 1, text: "Open Software", isCorrect: false },
        { id: 2, text: "Operating System", isCorrect: true },
        { id: 3, text: "Optical Sensor", isCorrect: false },
      ],
    },
    {
      text: "In which decade with the first transatlantic radio broadcast occur?",
      options: [
        { id: 0, text: "1850s", isCorrect: false },
        { id: 1, text: "1860s", isCorrect: false },
        { id: 2, text: "1870s", isCorrect: false },
        { id: 3, text: "1900s", isCorrect: true },
      ],
    },
    {
      text: "'.MOV' extension refers usually to what kind of file?",
      options: [
        { id: 0, text: "Image file", isCorrect: false },
        { id: 1, text: "Animation/movie file", isCorrect: true },
        { id: 2, text: "Audio file", isCorrect: false },
        { id: 3, text: "MS Office document", isCorrect: false },
      ],
    },
  ];

  const optionClicked=(isCorrect)=>{
    console.log(isCorrect);
    if(isCorrect)
    {
        setScore(score+1);
    }
    if(currentQuestion+1<questions.length){
        setCurrentQuestion(currentQuestion+1);
    }
    else
    setShowResult(true);
  }

  const restartQuiz=()=>{
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  }
  return (
    <>
      <div className="container quiz-container">
        <div className="row quiz-row py-5">
          <div className="col-md-7">
            <h1 className="text-center">Technology Quiz</h1>
            <h2 className="text-center">Current Score:{score}</h2>

            {showresult ? (
              <div className="final-result">
                <h2 className="text-center">
                  {" "}
                  {score} out of {questions.length} is correct - ( {score/questions.length *100}% )
                </h2>
                <div className="text-center">
                  <button className="btn btn-primary"onClick={()=>restartQuiz()}> Restart Quiz </button>
                </div>
              </div>
            ) : (
              <div className="questions">
                <h2 className="text-center">
                  {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3>{questions[currentQuestion].text}</h3>
                <ul>
                  {questions[currentQuestion].options.map((opt) => {
                    return (
                      <div className="options my-3">
                        <li className="text-center" onClick={()=>optionClicked(opt.isCorrect)} key={opt.id}>{opt.text}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizComp;
