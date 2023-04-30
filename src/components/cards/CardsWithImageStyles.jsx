import styled from 'styled-components';

export const CardWrapper = styled.article`
  background: ${({ theme }) => theme.backgroundCard};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const CardIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.backgroundText};
  margin-bottom: 10px;
`;

export const CardDesc = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.backgroundText};
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px 0 40px;
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 210px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.backgroundText};
  margin-bottom: 8px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.backgroundText};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
