import styled from "styled-components"

export const Box = styled.div`
    background: #212D45;
    border-radius: 12px;
    height: 344px;
    width: 100%;
    padding: 24px;
    text-align: center;
    @media ${props => props.theme.breakpoints.lg} {
        height: 210px;
    }
    @media ${props => props.theme.breakpoints.md} {
        height: 135px;
        padding: 16px;
    }
    @media ${props => props.theme.breakpoints.sm} {
        height: 110px;
        padding: 12px;
    }
`
export const BoxTitle = styled.h2`
    color: white;
    text-align: center;
    font-weight: 400;
`
export const BoxTitle1 = styled.span`
    font-size: 2.125rem;
`
export const BoxTitle2 = styled.span`
    margin-top: 30px;
`

export const BoxText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.75);
    @media ${props => props.theme.breakpoints.md}{
        font-size: 16px;
        line-height: 20px;
    };
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 14px;
    }
`

export const Join = styled.div`
    display: flex;
    max-width: 1040px;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
    @media ${props => props.theme.breakpoints.md}{
        display: flex;
        justify-content: center;
        padding-bottom: 64px;
    }
    @media ${props => props.theme.breakpoints.sm}{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 32px;
    }
`

export const JoinText = styled.h5`
    display: flex;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.5);
    @media ${props => props.theme.breakpoints.md}{
    line-height: 32px;
    font-size: 20px;
    };
    @media ${props => props.theme.breakpoints.sm}{
        font-size: 16px;
        line-height: 24px;
        margin: 0 0 16px;
    }
`

export const IconContainer = styled.div`
    display: flex;
    @media ${props => props.theme.breakpoints.sm}{
        width: 160px;
        justify-content: space-between;
    }
`