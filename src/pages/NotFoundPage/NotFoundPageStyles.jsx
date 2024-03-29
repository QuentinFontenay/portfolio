import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: #e7ebf2;
  font-size: 25.5px;
  letter-spacing: 0.1em;
  margin: 0.025em 0;
  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;

  @media (max-width: 30rem) {
    font-size: 40.5rem;
  }

  & > span {
    animation: spooky 2s alternate infinite linear;
    color: #528cce;
    display: inline-block;
  }
`;

export const SubTitle = styled.h2`
  color: #e7ebf2;
  margin-bottom: 0.4em;
`;
