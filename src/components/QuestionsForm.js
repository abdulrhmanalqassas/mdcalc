import { questions } from "./data";
import React, { useState } from "react";
const questionsAns = {};


function GetAll(questions) {
    
  const [score, setScore] = useState(0);


  const handleClick = (question, choiceValue) => {
    var finalScore = 0;
    questionsAns[question] = choiceValue;
    console.log(questionsAns);
    for (const key in questionsAns) {
      finalScore += questionsAns[key];
    }
    setScore(finalScore);
  };
  const ScoreCard = ({ score }) => {
    return (
      <>
        <div className="m-auto my-2 w-full max-w-sm p-4 bg-green border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-green-800 dark:border-gray-700">
          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            {score} points
          </h5>
          <ul className="my-4 space-y-3">High Probability of HIT (~64%)</ul>
        </div>
      </>
    );
  };
  const Listitem = ({ question, option }) => {
    return (
      <div
        key={question}
        className="m-auto my-2 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          {question}
        </h5>
        <ul className="my-4 space-y-3">{option}</ul>
      </div>
    );
  };
  const allQuestions = [];
  for (const key in questions) {
    const question = key.toString();
    if (Object.hasOwnProperty.call(questions, key)) {
      const element = questions[key];
      var option = element.map((elem, index) => {
        return (
          <li key={Object.keys(elem)}>
            <div
              onClick={() => handleClick(question, elem[Object.keys(elem)])}
              href="#"
              className="flex items-center p-3  font-bold text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 "> {Object.keys(elem)}</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                {elem[Object.keys(elem)]}
              </span>
            </div>
          </li>
        );
      });
      allQuestions.push(<Listitem question={question} option={option} />);
    }
  }
  return (
    <>
      {allQuestions}
      <ScoreCard score={score}></ScoreCard>
    </>
  );
}

export default function QuestionsForm() {
  return <>{GetAll(questions)} </>;
}
