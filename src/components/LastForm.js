import { last } from "./data";
import React, { useState } from "react";
const questionsAns = {};
const questionsValue = {};
const questions = last;
function GetAll(questions) {
  const [score, setScore] = useState(0);
  const isActiveStyle = {
    active:
      "flex items-center p-3  font-bold text-gray-700 rounded-lg bg-blue-200 hover:bg-blue-100 group hover:shadow dark:bg-blue-600 dark:hover:bg-blue-400 dark:text-white",
    notActive:
      "flex items-center p-3  font-bold text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",
  };

  const handleClick = (question, choiceValue, Value) => {
    var finalScore = 0;
    questionsAns[question] = choiceValue;
    questionsValue[question] = Value;
    console.log(questionsValue);
    for (const key in questionsValue) {
      finalScore += questionsValue[key];
    }
    setScore(finalScore);
  };
  const ScoreCard = ({ score }) => {
    const scoreString = {
      0: `Stroke risk was 0.2% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 0.3% risk of stroke/TIA/systemic embolism.`,
      1: `Stroke risk was 0.6% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 0.9% risk of stroke/TIA/systemic embolism.`,
      2: `Stroke risk was 2.2% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 2.9% risk of stroke/TIA/systemic embolism.`,
      3: `Stroke risk was 3.2% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 4.6% risk of stroke/TIA/systemic embolism.`,
      4: `Stroke risk was 4.8% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 6.7% risk of stroke/TIA/systemic embolism.`,
      5: `Stroke risk was 7.2% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 10.0% risk of stroke/TIA/systemic embolism.`,
      6: `Stroke risk was 9.7% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 13.6% risk of stroke/TIA/systemic embolism.`,
      7: `Stroke risk was 11.2% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 15.7% risk of stroke/TIA/systemic embolism.`,
      8: `Stroke risk was 7.2% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 10.0% risk of stroke/TIA/systemic embolism.`,
      9: `Stroke risk was 12.2% per year In >90,000 patients (the Swedish Atrial Fibrillation Cohort Study) and 17.4% risk of stroke/TIA/systemic embolism.`,
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
        console.log(
          "allQuestions",
          questionsAns,
          "eeeeeeeeeeelm",
          Object.keys(elem)
        );

        return (
          <li key={Object.keys(elem)}>
            <div
              onClick={() =>
                handleClick(
                  question,
                  Object.keys(elem)[0],
                  elem[Object.keys(elem)[0]]
                )
              }
              href="#"
              className={
                Object.keys(elem)[0] === questionsAns[question]
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
      <h1 className="m-auto my-2 w-full max-w-xl p-4 text-base font-semibold text-gray-900 md:text-xl dark:text-gray-900">
        CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk Calculates stroke
        risk for patients with atrial fibrillation, possibly better than the
        CHADS₂ Score.
      </h1>
      {allQuestions}
      <ScoreCard score={score}></ScoreCard>
    </>
  );
}

export default function Last() {
  return <>{GetAll(questions)} </>;
}
