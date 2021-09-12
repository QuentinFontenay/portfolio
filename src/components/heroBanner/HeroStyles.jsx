import styled from 'styled-components';

export const Box = styled.div`
    justify-content: space-around;
    height: 70vh;
    margin-top: 19vh;
    /* padding: 40px; */
    /* padding-left: 40px; */
    /* padding-right: 40px; */
`;

export const SubText = styled.p`
  text-align: left;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  color: white;

`;

export const HeaderText = styled.h1`
  text-align: left;
  font-size: 75px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 12px;
  color: white;
  
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    text-align: left;
    max-width: auto;
    p {
        text-align: justify;
        line-height: 1.5;
        max-width: 550px;
    }
    h1 {
        color: white;
        /* margin-top: 2vh;
        margin-left: 0;
        padding-left: 0; */
    }
`;