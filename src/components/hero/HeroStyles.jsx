import styled from 'styled-components';

export const Box = styled.div`
    /* justify-content: space-around; */
    /* height: 70vh; */
    text-align: center;
    display: flex;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    z-index: 2;
    /* padding: 40px; */
    /* padding-left: 40px; */
    /* padding-right: 40px; */
`;

export const BoxBackground = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 40%;
  border: 2px solid;
  transform: translate(-50%, -50%);
  width: 60vh;
  height: 30vh;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 40vh;
    }
`
export const SubText = styled.p`
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 12px;
    }

`;

export const HeaderText = styled.h1`
  font-size: 55px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 12px;
  color: 'black';
  @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 28px;
    }
`;

export const HeaderSubText = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 14px;
    }
`;

export const TextContainer = styled.article`
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

export const SocialBlock = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
  margin-top: 3vh;
  column-gap: 30px;
  a {
    transition: transform 0.2s;
  }
  a:hover {
    /* opacity: 0.75; */
    transform: translateY(-0.2em) scale(1.2);
  }

`

export const Image = styled.img`
  object-fit: ${props => props.objectFit || 'contain'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  border-radius: ${props => props.borderRadius || 0};
  align-self: center;
`;