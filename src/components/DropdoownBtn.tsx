import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function DropdoownBtn() {
  return (
    <div className="btn-group">
      <button 
        type="button" 
        className="btn dropdown-toggle custom-dropdown-btn" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
      >
        EN <MdKeyboardArrowDown className="custom-arrow" /> 
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  );
}

export default DropdoownBtn;
