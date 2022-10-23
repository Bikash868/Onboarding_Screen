import { useState } from "react";
import Stepper from "./components/Stepper";
import { UseContextProvider } from "./contexts/StepperContext";

import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Eden from "./components/steps/Eden";
import Final from "./components/steps/Final";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "",
    "",
    "",
    "",
  ];
  const handleClick = (direction:any) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const displayStep = (step:any) => {
    switch (step) {
      case 1:
        return <Account handleClick={handleClick}/>;
      case 2:
        return <Details handleClick={handleClick}/>;
      case 3:
        return <Eden handleClick={handleClick}/>;
      case 4:
        return <Final/>;
      default:
    }
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      
      <div className="horizontal container mt-5 ">
      <div className="flex mt-1 text-2xl font-bold text-500 justify-center">
        <span>Eden</span>
      </div>
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="my-10 p-10 mt-0 pt-5">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;