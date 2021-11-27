import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, -1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding-top: 4rem;
    @media ${({ theme }) => theme.breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 60px);
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
        padding-top: 2rem;
    }
  @media ${({ theme }) => theme.breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 100px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding-top: 2rem;
  }
`;

export const Span = styled.span`
    font-size: 2.2rem;
    color: ${({ theme }) => theme.nav.icon};
    @media ${({ theme }) => theme.breakpoints.sm} {
        font-size: 1.8rem;
        margin-left: 3rem;
    }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
    margin-left: 3rem;
  }
`;

export const Home = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    @media ${({ theme }) => theme.breakpoints.md} {
        grid-area: 1 / 1 / 2 / 3;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        grid-area: 1 / 1 / 2 / 3;
    }
`;

export const Navbar = styled.div`
    grid-area: 1 / 2 / 2 / 3;
`;

export const BurgWrap = styled.div`
  /* padding: 0 15px 13px 0; */
  display: none;
  @media ${({ theme }) => theme.breakpoints.sm} {  
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1.5rem;
    grid-column-start: 5;
    z-index:12;
    width: 4rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1.5rem;
    grid-column-start: 5;
    z-index:12;
    width: 4rem;
    }
`;

export const NavLink = styled.span`
    font-size: 2.2rem;
    line-height: 32px;
    color: ${({ theme }) => theme.nav.span};
    transition: 0.4s ease;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        padding: 0.5rem;
        font-size: 2.5rem;
    }
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0.5rem;
    font-size: 2.5rem;
  }
`;

export const NavBarItems = styled.ul`
    display: flex;
    justify-content: space-around;
    /* display: flex; */
    /* flex-direction: row; */
    li {
        float: left;
        padding: 30px;
    }
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    justify-content: center;
    position: fixed;
    right: ${props => props.open ? '0' : '-100vh'};
    bottom: 0;
    align-items: center;
    width:100%;
    height: 100vh;
    padding: 2rem;
    z-index: 10;
    background-color: black;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    justify-content: center;
    position: fixed;
    right: ${props => props.open ? '0' : '-100vh'};
    bottom: 0;
    align-items: center;
    width:100%;
    height: 100vh;
    padding: 2rem;
    z-index: 10;
    background-color: black;
  }
`