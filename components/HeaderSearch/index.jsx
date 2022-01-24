import React, { useState } from 'react';

import DownArrow from './DownArrow';
import SearchSVG from './SearchSVG';
import TrendSVG from './TrendSVG';

import {
  StyledHeaderSearch,
  StyledHeaderSearchSelect,
  StyledHeaderSearchSelectItems,
  StyledSearchGroup,
} from '../../styles/HeaderSearch.styles';

const HeaderSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [showTrendList, setShowTrendList] = useState(false);

  return (
    <StyledSearchGroup>
      <StyledHeaderSearchSelect
        onClick={() => setShowTrendList(!showTrendList)}>
        <TrendSVG />
        <div className='selectedValue'>{selectValue}</div>
        <DownArrow color={'#ffffff'} />
        {showTrendList && (
          <StyledHeaderSearchSelectItems>
            <p onClick={(e) => setSelectValue(e.target.innerText)}>Top</p>
            <p onClick={(e) => setSelectValue(e.target.innerText)}>Down</p>
          </StyledHeaderSearchSelectItems>
        )}
      </StyledHeaderSearchSelect>
      <StyledHeaderSearch>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchSVG />
      </StyledHeaderSearch>
    </StyledSearchGroup>
  );
};

export default HeaderSearch;
