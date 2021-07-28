import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  margin: 24px 0 40px;
`
export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 3rem;
    place-items: center;
    column-gap: 2rem;
    row-gap: 3rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-bottom: 0;
    }
`;

export const Img = styled.img`
    width:100%;
    height:100%;
`;

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 170px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`

export const ProjectDetail = styled.div`
  padding: 50px;
  background-color: #1F398A;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  min-height: 350px;
  grid-column: 1 / 3;
  grid-row: 1;
  h2 {
    margin-bottom: 25px;
  }
  .project__detail-container {
    width: 75%;
    p {
      line-height: 170%;
      min-height: 250px;
    }
  }
  @media (max-width: 1000px) {
    min-height: unset;
    grid-column: 1 / 4;
    grid-row: unset;
    padding: 30px 30px;
    .project__detail-container {
      width: 100%;
      p {
        min-height: unset;
      }
    }
  }
`

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0;
  a {
    margin-right: 10px;
  }
`

export const ProjectPreview = styled.div`
  grid-column: 2 / 4;
  grid-row: 1;
  position: relative;
  right: -20px;
  @media (max-width: 1000px) {
    right: 0;
    grid-column: 1 / 4;
    margin-bottom: 20px;
  }
  iframe {
    border-radius: 10px;
  }
`
export const Tags = styled.div`
  margin: 10px;
  color: red;
  display: flex;
  font-size: 24px;
  svg,
  i {
    margin-right: 25px;
  }
`