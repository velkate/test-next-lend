import React from 'react';
import Link from 'next/link';

import { StyledServiceFeedback } from '../../styles/ServiceFeedback.styles';

const ServiceFeedback = () => {
  return (
    <StyledServiceFeedback>
      <span>BETA</span>
      <p>
        This is new service. Please leave your <Link href='/'>feedback</Link>
      </p>
    </StyledServiceFeedback>
  );
};

export default ServiceFeedback;
