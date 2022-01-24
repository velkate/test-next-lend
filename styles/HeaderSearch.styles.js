import styled from 'styled-components';

export const StyledSearchGroup = styled.div`
  display: flex;
  gap: 1px;
  width: 100%;

  @media (min-width: 1024px) {
    width: 700px;
  }
`;

export const StyledHeaderSearch = styled.label`
  cursor: pointer;
  background-color: #363d52;

  width: 100%;
  height: 55px;
  padding: 20px;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    width: 545px;
  }

  input {
    border-radius: 0;
    border: 0;
    background-color: inherit;
    width: 100%;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const StyledHeaderSearchSelect = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #363d52;

  height: 55px;
  display: flex;
  align-items: center;
  padding: 20px;

  .selectedValue {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    min-width: 70px;
    width: fit-content;
    padding: 0 20px;
  }
`;

export const StyledHeaderSearchSelectItems = styled.div`
  position: absolute;
  top: 55px;
  left: 0;

  width: 100%;
  background-color: #363d52;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  p {
    width: 100%;
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    :hover {
      cursor: pointer;
      background-color: #2c3142;
    }
  }
`;
