import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, -1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 6rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 60px);
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
    }
`;

export const Span = styled.span`
    font-size: 2rem;
    color: ${({ theme }) => theme.nav.icon};
`;

export const Home = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 1 / 1 / 2 / 3;
    }
`;

export const Navbar = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: space-around;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 2 / 2 / 3 / 5;
    }
`;

export const NavLink = styled.span`
    font-size: 2rem;
    line-height: 32px;
    color: ${({ theme }) => theme.nav.span};
    transition: 0.4s ease;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;