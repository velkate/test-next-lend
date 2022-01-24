import styled from 'styled-components';

export const StyledBackgroundElement = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: inherit;
  display: flex;
  justify-content: center;

  svg {
    position: relative;
    min-width: 700px;
    bottom: -30px;
    transform: scale(0.8);
  }

  @media (min-width: 1024px) {
    padding: 100px 0 0;

    svg {
      position: relative;
      width: 100%;
      bottom: 0;
      transform: scale(1);
    }
  }
`;
