import React from 'react';

import Title from '../Title';
import Form from '../Form';
import PoweredBy from '../PoweredBy';
import BackgroundElement from '../BackgroundElement';

import { StyledMain } from '../../styles/Main.styles';

const Main = () => {
  return (
    <StyledMain>
      <Title />
      <Form />
      <PoweredBy />
      <BackgroundElement />
    </StyledMain>
  );
};

export default Main;
