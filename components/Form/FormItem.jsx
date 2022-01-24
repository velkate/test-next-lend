import React from 'react';

import { StyledFormItem } from '../../styles/FormItem.styles';

const FormItem = ({ label, divider = false, children }) => (
  <StyledFormItem divider>
    <span>{label}</span>
    {children}
  </StyledFormItem>
);

export default FormItem;
