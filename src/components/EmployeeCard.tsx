import { ProgressBar } from "react-bootstrap";
import { MdKeyboardArrowUp } from "react-icons/md";
import CardComponent from "./CardComponent";

const EmployeeCard = () => (
  <CardComponent className="small-card-style">
    <button className="card-btn d-flex justify-content-center align-items-center gap-2 mt-3">
      <span className="ps-2">45%</span>
      <MdKeyboardArrowUp size={25} className="pe-2" />
    </button>
    <div className="white-card pt-3">
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src="./pro.jpg" alt="employee" />
        <div>
          <h5 className="employee-name">Fatima Saleem</h5>
          <span className="employee-period">(Aug 07, 2024 - Aug 15, 2024)</span>
        </div>
      </div>
      <hr className="employee-divider" />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span className="employee-period pt-3">Hours worked</span>
        <span className="employee-hrs pt-4">14:36 Hours</span>
      </div>
      <ProgressBar now={25} className="mb-5 mt-2" />
    </div>
  </CardComponent>
);

export default EmployeeCard;
