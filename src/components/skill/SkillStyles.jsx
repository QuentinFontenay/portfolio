import styled from 'styled-components';

export const Boxes = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px;
    margin: 24px 0 40px;
    @media ${props => props.theme.breakpoints.md}{
        gap: 16px;
        margin: 20px 0 32px;
    }
    @media ${props => props.theme.breakpoints.sm}{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        max-width: 500px;
        margin: 24px auto;
    }
`
export const Divider = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.backgroundText};
  margin-bottom: 2rem;
  @media ${props => props.theme.breakpoints.sm} {
       display: none;
    }
`;

export const Box = styled.div`
    background: ${({ theme }) => theme.backgroundCard};
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    @media ${props => props.theme.breakpoints.lg} {
        height: 210px;
    }
    @media ${props => props.theme.breakpoints.md} {
        height: 210px;
        padding: 16px;
    }
    @media ${props => props.theme.breakpoints.sm} {
        height: 110px;
        padding: 12px;
        
        &:nth-child(2n){
        grid-row:2;
        }
    }
`

export const BoxNum = styled.h5`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.01em;
    margin-bottom: 8px;
    @media ${props => props.theme.breakpoints.md} {
        font-size: 28px;
        line-height: 32px;
    }
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 24px;
        line-height: 26px;
    }
`

export const BoxText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin-top: 1vh;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.backgroundText};
    @media ${props => props.theme.breakpoints.md}{
        font-size: 16px;
        line-height: 20px;
    };
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 14px;
        display: none;
    }
`

export const BoxTitleText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin-top: 1vh;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.backgroundText};
    @media ${props => props.theme.breakpoints.md}{
        font-size: 16px;
        line-height: 20px;
    };
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 13px;
        line-height: 14px;
    }
`

export const BoxSubText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.cards.subText};
    @media ${props => props.theme.breakpoints.sm} {
       display: none;
    }
`