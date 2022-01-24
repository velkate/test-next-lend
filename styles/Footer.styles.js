import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: none;
  width: 100%;
  color: #ffffff;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const StyledMobileFooter = styled.footer`
  width: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const FooterTop = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: #363d52;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 1024px) {
    gap: 20px;

    padding: 40px 10%;
    align-items: flex-start;
  }

  span {
    display: inline-block;
    padding-bottom: 15px;
    font-weight: bold;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (min-width: 1024px) {
      align-items: flex-start;
      gap: 5px;
    }

    li {
      a {
        color: #ffffff;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: #2c3142;

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 40px 10%;
    justify-content: space-between;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (min-width: 1024px) {
      align-items: flex-start;
      flex-direction: row;
      gap: 20px;
    }

    li {
      a {
        color: #ffffff;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const SocialMediaGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  @media (min-width: 1024px) {
    gap: 10px;
  }
`;
