import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContoleButtons(props) {
  const stepsArray = Object.keys([...Array(Number(props.count))]).map((e) =>
    Number(e)
  );
  const [buttonsInSecreen, setButtonsCount] = useState(
    props.show ? Number(props.show) : 3
  );
  const [sectionNumber, setSectionNumber] = useState(
    props.currentNumber ? Number(props.currentNumber) : 1
  );
  const [start, setStart] = useState(
    props.currentNumber ? sectionNumber - 1 : 0
  );
  const [end, setEnd] = useState(start + buttonsInSecreen);

  const [currentStep, setStep] = useState(sectionNumber);
  const largeLength = () => Number(props.count) > 3;


  const prevBtn = () => {
    if (largeLength() && start > 0)
      return (
        <button
          onClick={() => prev()}
          className="rounded-full w-12 h-12 shadow-md grid place-items-center font-bold hover:bg-lu-blue hover:text-white transition-all duration-300"
        >
          <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        </button>
      );
    return "";
  };
  const nextBtn = () => {
    if (largeLength() && end < stepsArray.length - 1)
      return (
        <button
          onClick={() => next()}
          className="rounded-full w-12 h-12 shadow-md grid place-items-center font-bold hover:bg-lu-blue hover:text-white transition-all duration-300"
        >
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </button>
      );
    return "";
  };
  const next = () => {
    setStart((prev) => prev + 1);
    setEnd((prev) => prev + 1);
    setStep((prev) => prev + 1);
  };
  const prev = () => {
    setStart((prev) => prev - 1);
    setEnd((prev) => prev - 1);
    setStep((prev) => prev - 1);
  };

  //emit the value
  useEffect(() => props.onClick(currentStep), [currentStep]);

  return (
    <div className="flex items-center justify-center space-x-2 select-none">
      {prevBtn()}
      {stepsArray.slice(start, end).map((c) => {
        return (
          <button
            className={`rounded-full w-12 h-12  shadow-md grid place-items-center font-bold  transition-all duration-300 ${
              c + 1 == currentStep
                ? "bg-lu-blue text-white "
                : "hover:bg-lu-blue hover:text-white"
            }`}
            key={c + 1}
            onClick={() => setStep(c + 1)}
          >
            {c + 1}
          </button>
        );
      })}
      {nextBtn()}
    </div>
  );
}
