import React from 'react';
import Link from 'next/link';

import FacebookSVG from './FacebookSVG';
import LinkedInSVG from './LinkedInSVG';
import YouTubeSVG from './YouTubeSVG';
import MobileLogoSVG from './MobileLogoSVG';

import {
  FooterBottom,
  FooterTop,
  SocialMediaGroup,
  StyledFooter,
  StyledMobileFooter,
} from '../../styles/Footer.styles';

const Footer = () => {
  return (
    <>
      <StyledMobileFooter>
        <FooterTop>
          <MobileLogoSVG />
          <nav>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/'>Contact us</Link>
            </li>
            <li>
              <Link href='/'>Feedback</Link>
            </li>
          </nav>
          <SocialMediaGroup>
            <Link href='/'>
              <a>
                <FacebookSVG />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <LinkedInSVG />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <YouTubeSVG />
              </a>
            </Link>
          </SocialMediaGroup>
        </FooterTop>
        <FooterBottom>
          <nav>
            <li>
              <Link href='/'>Sitemap</Link>
            </li>
            <li>
              <Link href='/'>Privacy policy</Link>
            </li>
            <li>
              <Link href='/'>Terms of use & Copyright Policies</Link>
            </li>
            <li>
              <Link href='/'>Cookie policy</Link>
            </li>
          </nav>
        </FooterBottom>
      </StyledMobileFooter>
      <StyledFooter>
        <FooterTop>
          <span>property xyz</span>
          <nav>
            <li>
              <Link href='/'>Property investors sign up</Link>
            </li>
            <li>
              <Link href='/'>Sell your property</Link>
            </li>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/'>Contact us</Link>
            </li>
            <li>
              <Link href='/'>Feedback</Link>
            </li>
          </nav>
        </FooterTop>
        <FooterBottom>
          <nav>
            <li>
              <Link href='/'>Sitemap</Link>
            </li>
            <li>
              <Link href='/'>Privacy policy</Link>
            </li>
            <li>
              <Link href='/'>Terms of use</Link>
            </li>
            <li>
              <Link href='/'>Cookie policy</Link>
            </li>
            <li>
              <Link href='/'>Data source</Link>
            </li>
          </nav>
          <SocialMediaGroup>
            <span>Follow us on social media</span>
            <Link href='/'>
              <a>
                <FacebookSVG />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <LinkedInSVG />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <YouTubeSVG />
              </a>
            </Link>
          </SocialMediaGroup>
        </FooterBottom>
      </StyledFooter>
    </>
  );
};

export default Footer;
