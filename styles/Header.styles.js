import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2c3142;

  a {
    padding: 15px 0;
  }

  @media (min-width: 1024px) {
    padding: 0 10%;
    height: 55px;
    flex-direction: row;
    justify-content: space-between;

    a {
      padding: 0 15px 0 0;
    }
  }
`;
