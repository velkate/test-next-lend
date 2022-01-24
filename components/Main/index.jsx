import React from 'react';

import Title from '../Title';
import Form from '../Form';
import PoweredBy from '../PoweredBy';

import { StyledMain } from '../../styles/Main.styles';

const Main = () => {
  return (
    <StyledMain>
      <Title />
      <Form />
      <PoweredBy />
    </StyledMain>
  );
};

export default Main;
