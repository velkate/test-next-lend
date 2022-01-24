import React from 'react';
import Link from 'next/link';

import HeaderSearch from '../HeaderSearch';
import MainLogoSVG from './MainLogoSVG';

import { StyledHeader } from '../../styles/Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <a>
          <MainLogoSVG />
        </a>
      </Link>
      <HeaderSearch />
    </StyledHeader>
  );
};

export default Header;
