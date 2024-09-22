import React from 'react';
import { Container } from 'react-bootstrap'; 
import { FaArrowRight } from 'react-icons/fa';
import DropdoownBtn from './DropdoownBtn'; 

const MobileViewHeader = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <img src="./introdo-logo.svg" alt="introdo logo" />
        <DropdoownBtn customStyle="lang-dropdown-btn" />
      </div>

      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h5 className="footer-text-head text-align-center d-flex justify-content-center pt-4">
          HR Updates, straight to your Inbox - Subscribe Today{' '}
        </h5>

        <div
          className="position-relative pt-2 w-full"
          style={{ width: '100%' }}
        >
          <input
            className="form-control d-flex justify-content-center align-items-center border rounded-pill"
            type="text"
            placeholder="Enter Work Emails"
            id="example-search-input"
            style={{
              paddingLeft: '1rem',
              padding: '0.6rem',
              color: 'var(--Tertiary-AshViolet---200, #9B97A8)',
            }}
          />
          <button
            className="btn outline-btn btn-outline-secondary border-start-0 border rounded-pill position-absolute"
            type="button"
            style={{
              right: '5px',
              top: '57%',
              transform: 'translateY(-50%)',
              backgroundColor: '#482084',
            }}
          >
            <FaArrowRight color="white" />
          </button>
        </div>

        <div className="d-flex gap-4 pt-3 social-icons-div">
          <img src="./facebook.svg" alt="facebook" />
          <img src="./instagram.svg" alt="instagram" />
          <img src="./linkedin.svg" alt="linkedin" />
          <img src="./youtube.svg" alt="youtube" />
          <img src="./twitter.svg" alt="twitter" />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default MobileViewHeader;
