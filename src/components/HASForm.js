import { HASquestions } from "./data";
import React, { useState } from "react";
const questionsAns = {};
const questions = HASquestions;
function GetAll(questions) {
  const [score, setScore] = useState(0);
  const isActiveStyle = {
    active:
      "flex items-center p-3  font-bold text-gray-700 rounded-lg bg-blue-200 hover:bg-blue-100 group hover:shadow dark:bg-blue-600 dark:hover:bg-blue-400 dark:text-white",
    notActive:
      "flex items-center p-3  font-bold text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",
  };

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
    const scoreString = {
      0: `/ Risk was 0.9% In one validation study (Lip 2011) and 1.13 bleeds per 100 patient-years in another validation study (Pisters 2010).
      Anticoagulation should be considered: Patient has a relatively low risk for major bleeding (~1/100 patient-years).
      `,
      1: `Risk was 3.4% In one validation study (Lip 2011) and 1.02 bleeds per 100 patient-years in another validation study (Pisters 2010).
      Anticoagulation should be considered: Patient has a relatively low risk for major bleeding (~1/100 patient-years).
      `,
      2: `Risk was 4.1% in one validation study (Lip 2011) and 1.88 bleeds per 100 patient-years in another validation study (Pisters 2010).
      Anticoagulation can be considered, however patient does have moderate risk for major bleeding (~2/100 patient-years).
      `,
      3: `Risk was 5.8% In one validation study (Lip 2011) and 3.72 bleeds per 100 patient-years in another validation study (Pisters 2010).
      Alternatives to anticoagulation should be considered: Patient is at high risk for major bleeding.
      `,
      4: `Risk was 8.9% in one validation study (Lip 2011) and 8.70 bleeds per 100 patient-years in another validation study (Pisters 2010).
      Alternatives to anticoagulation should be considered: Patient is at high risk for major bleeding.
      `,
      5: `Risk was 9.1% in one validation study (Lip 2011) and 12.50 bleeds per 100 patient-years in another validation study (Pisters 2010).
      Alternatives to anticoagulation should be considered: Patient is at high risk for major bleeding.
      `,
      6: `Scores greater than 5 were too rare to determine risk, but are likely over 10%.
Alternatives to anticoagulation should be considered: Patient is at very high risk for major bleeding.
`,
      7: `Scores greater than 5 were too rare to determine risk, but are likely over 10%.
Alternatives to anticoagulation should be considered: Patient is at very high risk for major bleeding.
`,
      8: `Scores greater than 5 were too rare to determine risk, but are likely over 10%.
Alternatives to anticoagulation should be considered: Patient is at very high risk for major bleeding.
`,
      8: `Scores greater than 5 were too rare to determine risk, but are likely over 10%.
Alternatives to anticoagulation should be considered: Patient is at very high risk for major bleeding.
`,
    };
    return (
      <>
        <div className=" m-auto my-2 w-full max-w-sm p-4 bg-green border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-green-800 dark:border-gray-700">
          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            {score} points
          </h5>
          <ul className="my-4 space-y-3">{scoreString[score]}</ul>
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
        console.log("allQuestions", questionsAns);
        return (
          <li key={Object.keys(elem)}>
            <div
              onClick={() => handleClick(question, elem[Object.keys(elem)])}
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
      <h1 className="m-auto my-2 w-full max-w-sm p-4 text-base font-semibold text-gray-900 md:text-xl dark:text-gray-900">
        HAS-BLED Score for Major Bleeding Risk Estimates risk of major bleeding
        for patients on anticoagulation to assess risk-benefit in atrial
        fibrillation care.
      </h1>
      {allQuestions}
      <ScoreCard score={score}></ScoreCard>
    </>
  );
}

export default function HASForm() {
  return <>{GetAll(questions)} </>;
}
