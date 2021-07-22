import styled from 'styled-components'

const BACKGROUND_NEXT_LG = `background: url("data:image/svg+xml,%3Csvg width='13' height='20' viewBox='0 0 13 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2L10 10L2 18' stroke='%238585AC' stroke-width='3'/%3E%3C/svg%3E%0A") no-repeat center #fff;`
const BACKGROUND_NEXT_SM = `background: url("data:image/svg+xml,%3Csvg width='9' height='14' viewBox='0 0 9 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.14289 1.28571L6.85718 7L1.14289 12.7143' stroke='%238585AC' stroke-width='3'/%3E%3C/svg%3E%0A") no-repeat center #fff;`
const BACKGROUND_PREV_LG = `background: url("data:image/svg+xml,%3Csvg width='13' height='20' viewBox='0 0 13 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 2L3 10L11 18' stroke='%238585AC' stroke-width='3'/%3E%3C/svg%3E%0A") no-repeat center #fff;`
const BACKGROUND_PREV_SM = `background: url("data:image/svg+xml,%3Csvg width='9' height='14' viewBox='0 0 9 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.85711 1.28571L2.14282 7L7.85711 12.7143' stroke='%238585AC' stroke-width='3'/%3E%3C/svg%3E%0A") no-repeat center #fff;`

export const ButtonsWrapper = styled.div`
    position: relative;
    top: 40rem;
    left: 30rem;
    z-index: 1;

    button {
      width: ${(props) => (props.large ? '3.5rem' : '2.5rem')};
      height: ${(props) => (props.large ? '3.5rem' : '2.5rem')};
      border: none;
      box-shadow: 0 0.9375rem 1.25rem -0.625rem rgba(36, 36, 113, 0.0991313);
    }
    button:hover, button:focus {
      background-color: #EAE7F8;
      border: none;
      outline: none;
    }
    button:active {
      transform: scale(0.9);
    }
  @media(max-width: 1050px) {
    position: relative;
    left: calc(50% - 2.5rem);
    top: ${(props) => (props.large ? '18rem' : '')};
      button {
        width: 2.5rem;
        height: 2.5rem;
      }
  }
`

export const LeftButton = styled.button`
  border-radius: 1.75rem 0 0 1.75rem;
  ${(props) => (props.large ? BACKGROUND_PREV_LG : BACKGROUND_PREV_SM)}
`

export const RightButton = styled.button`
  border-radius: 0 1.75rem 1.75rem 0;
  ${(props) => (props.large ? BACKGROUND_NEXT_LG : BACKGROUND_NEXT_SM)}
`