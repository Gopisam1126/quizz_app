/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { questions } from "../utils/questions";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Navbar from "./navbar";

function Mechanical() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(null);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOptionIndex(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOptionIndex(null);
    }
  };

  const handleOptionChange = (selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let totalScore = 0;

    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        totalScore += 4; // Add 4 marks for a correct answer
      } else if (answer !== null) {
        totalScore -= 1; // Deduct 1 mark for an incorrect answer
      }
    });

    setScore(totalScore);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const options = questions[currentQuestionIndex].options;

      if (event.key === "ArrowRight") {
        handleNextQuestion();
      } else if (event.key === "ArrowLeft") {
        handlePreviousQuestion();
      } else if (event.key === "ArrowDown") {
        setSelectedOptionIndex((prevIndex) =>
          prevIndex === null || prevIndex === options.length - 1
            ? 0
            : prevIndex + 1
        );
      } else if (event.key === "ArrowUp") {
        setSelectedOptionIndex((prevIndex) =>
          prevIndex === null || prevIndex === 0
            ? options.length - 1
            : prevIndex - 1
        );
      } else if (event.key === "Enter" && selectedOptionIndex !== null) {
        handleOptionChange(options[selectedOptionIndex].option);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestionIndex, selectedOptionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="fixed top-8 left-20 right-20">
        <Navbar />
      </div>
      <section className="mt-36">
        {/* Header Section */}
        <div className="flex relative justify-between px-10 py-2 left-20 gap-2 text-3xl bg-slate-200 w-[86rem] rounded-t-lg items-center">
          <div className="hover:bg-slate-300 hover:opacity-100 px-1 py-1 transition-all duration-200 rounded-lg opacity-30 cursor-pointer">
            <KeyboardBackspaceIcon
              style={{
                fontSize: "3rem",
              }}
            />
          </div>
          <div>
            <p className="text-3xl">Mechanical</p>
          </div>
          <div>
            <p>Qn: {currentQuestionIndex + 1}</p>
          </div>
        </div>

        {/* Question Section */}
        <div className="bg-slate-100 w-[86rem] mx-auto p-10 rounded-b-lg">
          <p className="text-2xl font-semibold mb-4">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <div
                key={option.option}
                className={`flex items-center gap-2 mb-3 text-lg ${
                  selectedOptionIndex === index
                    ? "bg-blue-100 rounded-lg p-2"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  id={`q${currentQuestionIndex}_o${option.option}`}
                  name={`question-${currentQuestionIndex}`}
                  checked={answers[currentQuestionIndex] === option.option}
                  onChange={() => handleOptionChange(option.option)}
                />
                <label htmlFor={`q${currentQuestionIndex}_o${option.option}`}>
                  {option.value}
                </label>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-2 rounded-lg ${
                currentQuestionIndex === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              className={`px-6 py-2 rounded-lg ${
                currentQuestionIndex === questions.length - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>

        {/* Submit Button and Score */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-xl"
          >
            Submit
          </button>
        </div>
        {score !== null && (
          <div className="mt-10 text-center text-2xl font-bold">
            Your Score: {score} / {questions.length * 4}
          </div>
        )}
      </section>
    </>
  );
}

export default Mechanical;
