import styled from 'styled-components';

export const Head = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: "#1F2024";
  padding-left: 1rem;
  padding-right: 1rem;
`
export const Container = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  margin: 0 auto;
  width: 100%;
  /* max-width: 1280px; */
`
export const HeaderText = styled.h1`
  margin-bottom: 5px;
  font-size: 80px;
  /* max-width: 900px; */
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 700px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 700px;
    }
`

export const HeaderCopy = styled.h3`
  max-width: 900px;
  margin-bottom: 15px;
`

export const HeaderSubCopy = styled.h5`
  font-size: 30px;
  color: gray;
  /* max-width: 480px; */
  margin-bottom: 10px;
`

export const HeaderLink = styled.a`
  color: yellow;
  line-height: 44px;
`