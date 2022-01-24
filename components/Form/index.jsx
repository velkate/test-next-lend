import React, { useState } from 'react';

import FormItem from './FormItem';
import CustomSelect from '../CustomSelect';

import { SearchBtn, StyledForm } from '../../styles/Form.styles';

const typeOptions = [
  {
    id: 1,
    label: 'Flat',
    value: 'flat',
  },
  {
    id: 2,
    label: 'Detached',
    value: 'detached',
  },
  {
    id: 3,
    label: 'Semi-Detached',
    value: 'semiDetached',
  },
  {
    id: 4,
    label: 'Terrace',
    value: 'terrace',
  },
];

const badsOptions = [
  {
    id: 1,
    label: '1',
    value: '1',
  },
  {
    id: 2,
    label: '2',
    value: '2',
  },
  {
    id: 3,
    label: '3',
    value: '3',
  },
];

const Form = () => {
  const [postcode, setPostcode] = useState('');
  const [type, setType] = useState(null);
  const [beds, setBeds] = useState(null);

  const handleSubmit = () => {
    console.log('SearchData: ', {
      postcode,
      type,
      beds,
    });

    setPostcode('');
    setType(null);
    setBeds(null);
  };

  return (
    <StyledForm>
      <FormItem label='Property postcode' divider>
        <input
          type='text'
          placeholder='e.g CH5 387'
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </FormItem>
      <FormItem label='Property type' divider>
        <CustomSelect
          options={typeOptions}
          selectedOption={type}
          onSelectOption={setType}
        />
      </FormItem>
      <FormItem label='No. of beds'>
        <CustomSelect
          options={badsOptions}
          selectedOption={beds}
          onSelectOption={setBeds}
        />
      </FormItem>
      <SearchBtn onClick={handleSubmit}>Search</SearchBtn>
    </StyledForm>
  );
};

export default Form;
