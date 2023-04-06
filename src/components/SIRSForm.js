import { SIRSquestions } from "./data";
import React, { useState } from "react";
const questionsAns = {};
const questions = SIRSquestions;

function GetAll(questions) {
  const [extra, setExtra] = useState("");
  const [score, setScore] = useState(0);
  const isActiveStyle = {
    active:
      "flex items-center p-3  font-bold text-gray-700 rounded-lg bg-blue-200 hover:bg-blue-100 group hover:shadow dark:bg-blue-600 dark:hover:bg-blue-400 dark:text-white",
    notActive:
      "flex items-center p-3  font-bold text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",
  };

  const handleClick = (question, choiceValue, elem) => {
    var finalScore = 0;
    console.log("question, choiceValue", question, choiceValue, "elem>>", elem);
    questionsAns[question] = choiceValue;
    if (
      question === "Lactic acidosis, SBP <90 or SBP drop ≥40 mm Hg of normal" &&
      elem.YES === 0
    )
      setExtra("This patient meets severe sepsis criteria");
    if (
      question ==
        "Severe sepsis with hypotension, despite adequate fluid resuscitation" &&
      elem.YES === 0
    )
      setExtra("This patient meets septic shock criteria.");
    if (question == "Evidence of ≥2 organs failing" && elem.YES === 0)
      setExtra(
        "This patient meets multiple organ dysfunction syndrome Management"
      );
    if (
      question == "Suspected or present source of infection" &&
      elem.YES === 0
    )
      setExtra( 
        "Follow your guidelines for sepsis, which typically include aggressive fluid resuscitation, early, broad-spectrum antibiotics, ICU consultation, CVP evaluation, and occasionally pressors and transfusion."
      );
    for (const key in questionsAns) {
      const x = questionsAns[key];
      finalScore += x;
    }

    setScore(finalScore);
  };
  const ScoreCard = ({ score }) => {
    const scoreString = {
      0: "This patient does not meet SIRS criteria. For other causes of shock, see the Next Steps section.",
      1: "This patient does not meet SIRS criteria. For other causes of shock, see the Next Steps section.",
      2: "This patient meets SIRS criteria.",
      3: "This patient meets SIRS criteria.",
      4: "This patient meets SIRS criteria.",
    };
    return (
      <>
        <div className=" m-auto my-2 w-full max-w-sm p-4 bg-green border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-green-800 dark:border-gray-700">
          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            {(score + "0")
              .split("")
              .reduce(
                (partialSum, a) => parseInt(partialSum) + parseInt(a),
                0
              )}{" "}
            points
          </h5>
          <ul className="my-4 space-y-3">
            {
              scoreString[
                (score + "0")
                  .split("")
                  .reduce(
                    (partialSum, a) => parseInt(partialSum) + parseInt(a),
                    0
                  )
              ]
            }{" "}
            {((score + "0")
                  .split("")
                  .reduce(
                    (partialSum, a) => parseInt(partialSum) + parseInt(a),
                    0
                  )>1)?extra:""}
          </ul>
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
        console.log(elem[Object.keys(elem)] === questionsAns[question]);
        return (
          <li key={Object.keys(elem) + elem[1]}>
            <div
              onClick={() =>
                handleClick(question, elem[Object.keys(elem)], elem)
              }
              href="#"
              className={
                elem[Object.keys(elem)] === questionsAns[question]
                  ? isActiveStyle["active"]
                  : isActiveStyle["notActive"]
              }
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
      <h1 className="m-auto my-2 w-full max-w-lg  p-4 text-base font-semibold text-gray-900 md:text-xl dark:text-gray-900">
        SIRS, Sepsis, and Septic Shock Criteria Defines the severity of sepsis
        and septic shock.
      </h1>
      {allQuestions}
      <ScoreCard score={score}></ScoreCard>
    </>
  );
}

export default function QuestionsForm() {
  return <>{GetAll(questions)} </>;
}
