import styled from 'styled-components';

export const ProjectContainer = styled.div`
  margin: 3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1410px) {
    align-items: center;
  }
  @media only screen and (max-width: 900px) {
    margin: 0 0 1em;
  }
`;

export const ProjectCaptionContainer = styled.div`
  width: 90%;
  display: flex;
  padding: 0 0 14em 0;
  flex-direction: column;
  flex-grow: 1;
  @media only screen and (max-width: 1410px) {
    width: 100%;
    padding: 3em 0;
    max-width: 35em;
  }
  @media only screen and (max-width: 768px) {
    padding: 1em 0;
  }
`;

export const ProjectLinkContainer = styled.div`
  margin: auto 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ProjectLink = styled.a`
  margin: 0 0 0 1em;
  display: flex;
  align-items: center;
  color: #fff5ee;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4rem;
  white-space: nowrap;
  svg {
    opacity: 0.75;
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    :hover {
      text-decoration: none;
      transform: scale(1.1);
      opacity: 1;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0 0 0 1em;
    * {
      font-size: 1rem;
    }
  }
`;

export const ProjectTitleContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: row;
  align-items: center;
`;

export const CustomImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  border: transparent;
  background-color: #121113;
`;

export const ProjectTitle = styled.h2`
  margin: 0.25em 1em 0.25em 0;
  color: ${({ theme: { palette } }) => palette?.font.primary};
  font-family: ${({ theme: { typography } }) => typography?.heading.fontFamily};
  font-size: ${({ theme: { typography } }) => typography?.heading.fontSize.primary};
  font-weight: ${({ theme: { typography } }) => typography?.heading.fontWeight};
  letter-spacing: ${({ theme: { typography } }) =>
    typography?.heading.letterSpacing};
  white-space: nowrap;
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme: { typography } }) => typography?.heading.fontSize.secondary};
    white-space: normal;
  }
  @media only screen and (max-width: 768px) {
    white-space: nowrap;
    align-content: center;
  }
  @media only screen and (max-width: 500px) {
    margin: 0 auto 0 0;
  }
`;

export const ProjectHorizontalLine = styled.div`
width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10em;
  border-top: 1px solid #fff5ee;
  opacity: 0.75;
  @media only screen and (max-width: 500px) {
    display: none;
    margin: 0;
  }
`;

export const PortfolioContent = styled.div`
  min-height: 100%;
  /* width: 75%; */
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  justify-content: space-around;
  > div:nth-child(odd) {
    flex-direction: row;
    > div {
      margin-left: 3em;
    }
  }
  > div:nth-child(even) {
    flex-direction: row-reverse;
    > div {
      margin-right: 3em;
    }
  }
  @media only screen and (max-width: 1410px) {
    > div:nth-child(odd) {
      flex-direction: column;
      > div {
        margin-left: unset;
      }
    }
    > div:nth-child(even) {
      flex-direction: column;
      > div {
        margin-right: unset;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0 0 1em;
  }
`;