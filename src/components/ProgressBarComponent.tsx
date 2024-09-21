import { ProgressBar } from "react-bootstrap";

const ProgressBarComponent = ({ progress }: any) => {
  return <ProgressBar now={progress} className="mb-5 mt-2" />;
};

export default ProgressBarComponent;
