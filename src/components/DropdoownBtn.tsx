import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function DropdoownBtn({ customStyle }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="btn-group" ref={dropdownRef}>
      <button
        type="button"
        className={`btn dropdown-toggle ${customStyle}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        EN <MdKeyboardArrowDown className="custom-arrow" />
      </button>

      {isOpen && (
        <div className="dropdown-menu show">
          <a className="dropdown-item" href="#">
            US
          </a>
          <a className="dropdown-item" href="#">
            EN
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdoownBtn;
