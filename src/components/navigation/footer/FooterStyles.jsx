import styled from 'styled-components';

export const FooterWrapper = styled.section`
  /* width: calc(100vw - 96px); */
  width: 100%;
  padding: Opx 44px 0px;
  /* margin: 1rem auto; */
  box-sizing: content-box;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  overflow: visible;
  white-space: nowrap;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const SocialContainer = styled.div`
  margin: 1.5rem 3rem 1.5rem 0;
  text-align: right;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    text-align: center;
    margin: 0;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 12px;
  &:hover {
    background-color: ${({ theme }) => theme.socialIcon};
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Copyright = styled.p`
  flex: 1 1 50%;
  text-align: left;
  margin-left: 6vh;
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`;
