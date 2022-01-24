import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #2c3142;
  
  a {
    width: 100%;
    padding: 15px 20px;
    
    @media (min-width: 1024px) {
      padding: 15px;
    }
  }
  
  @media (min-width: 1024px) {
    padding: 0 20%;
    height: 55px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 0 15px 0 0;
    }
  }
`;
