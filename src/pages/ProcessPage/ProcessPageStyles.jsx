import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
`

export const Title = styled.h1`
  color: #e7ebf2;
  font-size: 25.5px;
  letter-spacing: .10em;
  margin: .025em 0;
  text-shadow: .05em .05em 0 rgba(0,0,0,.25);
  white-space: nowrap;
  
  @media(max-width: 30rem) {
    font-size: 40.5rem;
  }
`