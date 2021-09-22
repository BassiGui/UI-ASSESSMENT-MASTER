import React from 'react';

import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Body from './components/Body';
import './account-overview.css';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <Container className="AccountOverview">
      <div className="feefo_app">
        <Header data={data} />
        <Body data={data} />
      </div>
    </Container>
  );
};

export default AccountOverview;
