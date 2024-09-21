import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import CardComponent from "./CardComponent";
import TimerComponent from "./TimerComponent";
import ProgressBarComponent from "./ProgressBarComponent";

const EmployeeCard = () => {
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = (timeElapsed: any, totalDuration: any) => {
    const newProgress = (timeElapsed / totalDuration) * 100;
    setProgress(newProgress);
  };

  return (
    <CardComponent className="small-card-style">
      <button className="card-btn d-flex justify-content-center align-items-center gap-2 mt-3">
        <span className="ps-2">{Math.round(progress)}%</span>
        <MdKeyboardArrowUp size={25} className="pe-2" />
      </button>
      <div className="white-card pt-3">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <img src="./pro.jpg" alt="employee" />
          <div>
            <h5 className="employee-name">Fatima Saleem</h5>
            <span className="employee-period">
              (Aug 07, 2024 - Aug 15, 2024)
            </span>
          </div>
        </div>
        <hr className="employee-divider" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="employee-period pt-3">Hours worked</span>

          <TimerComponent onTimeUpdate={handleTimeUpdate} />
        </div>

        <ProgressBarComponent progress={progress} />
      </div>
    </CardComponent>
  );
};

export default EmployeeCard;
