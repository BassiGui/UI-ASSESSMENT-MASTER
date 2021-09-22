import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = ({ data }) => {
  return (
    <>
      <header className="feefo_header">
        <div className="feefo_accountOverview">
          <h2>Account Overview</h2>
        </div>
        <div className="feefo_suport">
          <p>your feefo support contact</p>
          <div className="feefo_conatainer-contato">
            <div className="feefo_iconS">S</div>
            <div>
              <p className="feefo_support-name">{data.supportContact.name}</p>
              <div className="feefo_contato">
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <span>{data.supportContact.email}</span>{' '}
                <span>020 3362 4208</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
