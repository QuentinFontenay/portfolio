import styled from 'styled-components';

export const Box = styled.div`
    /* justify-content: space-around; */
    /* height: 70vh; */
    text-align: center;
    /* padding: 40px; */
    /* padding-left: 40px; */
    /* padding-right: 40px; */
`;

export const SubText = styled.p`
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;

`;

export const HeaderText = styled.h1`
  font-size: 55px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 12px;
  
`;

export const TextContainer = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* height: 70vh; */
    max-width: auto;
    p {
        text-align: center;
        line-height: 1.5;
    }
    h1 {
        /* margin-top: 2vh;
        margin-left: 0;
        padding-left: 0; */
    }
`;

export const SocialBlock = styled.li`
  display: inline-block;
`

export const Image = styled.img`
  object-fit: ${props => props.objectFit || 'contain'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  border-radius: ${props => props.borderRadius || 0};
  text-align: center;
`;