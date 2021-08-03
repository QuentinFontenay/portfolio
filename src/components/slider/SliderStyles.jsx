import styled from 'styled-components'

// eslint-disable-next-line quotes
const BACKGROUNDS_LARGE = `#17181d`
// eslint-disable-next-line quotes
const BACKGROUNDS_SMALL = `url("data:image/svg+xml,%3Csvg width='285' height='71' viewBox='0 0 285 71' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M285 70.9454C285 70.9454 186.53 49.4925 129.333 18.5632C72.1361 -12.3662 0 5.4676 0 5.4676L0 70.9454H285Z' fill='%23F4F4FC'/%3E%3C/svg%3E%0A") bottom left no-repeat, url("data:image/svg+xml,%3Csvg width='60' height='50' viewBox='0 0 60 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.15' fill-rule='evenodd' clip-rule='evenodd' d='M0 50V0H26.3077L12.429 50H0ZM33.6923 50V0H60L46.1213 50H33.6923Z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='41.872' y1='58.658' x2='74.9546' y2='14.2125' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%239975D0'/%3E%3Cstop offset='1' stop-color='%234A3FDB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat center 22.75rem, url("data:image/svg+xml,%3Csvg width='327' height='308' viewBox='0 0 327 308' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M153.352 63.9293C181.686 34.554 232.844 86.7623 275.229 146.401C317.613 206.039 346.512 234.378 309.493 272.758C272.474 311.138 193.459 326.399 153.352 272.758C113.246 219.118 125.019 93.3047 153.352 63.9293Z' fill='url(%23paint0_linear)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.991 143.565C-17.3719 120.072 25.9279 77.6544 75.39 42.5114C124.852 7.36829 148.355 -16.5928 180.186 14.1012C212.017 44.7953 224.674 110.31 180.186 143.565C135.699 176.819 31.3539 167.057 6.991 143.565Z' fill='%23F4F4FC'/%3E%3Cpath d='M162 21.3742L171.348 12L180.695 21.3742L190.043 12L199.391 21.3742L208.738 12' stroke='%23D3629D' stroke-width='2'/%3E%3Cpath d='M162 29.7742L171.348 20.4L180.695 29.7742L190.043 20.4L199.391 29.7742L208.738 20.4' stroke='%23D3629D' stroke-width='2'/%3E%3Cpath d='M162 38.1741L171.348 28.8L180.695 38.1741L190.043 28.8L199.391 38.1741L208.738 28.8' stroke='%23D3629D' stroke-width='2'/%3E%3Cpath d='M162 46.5742L171.348 37.2L180.695 46.5742L190.043 37.2L199.391 46.5742L208.738 37.2' stroke='%23D3629D' stroke-width='2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M230.401 271.833C231.175 271.833 231.802 271.199 231.802 270.417C231.802 269.634 231.175 269 230.401 269C229.627 269 229 269.634 229 270.417C229 271.199 229.627 271.833 230.401 271.833ZM230.401 282.222C231.175 282.222 231.802 281.588 231.802 280.806C231.802 280.023 231.175 279.389 230.401 279.389C229.627 279.389 229 280.023 229 280.806C229 281.588 229.627 282.222 230.401 282.222ZM240.676 282.222C241.45 282.222 242.077 281.588 242.077 280.806C242.077 280.023 241.45 279.389 240.676 279.389C239.902 279.389 239.275 280.023 239.275 280.806C239.275 281.588 239.902 282.222 240.676 282.222ZM252.352 280.806C252.352 281.588 251.724 282.222 250.951 282.222C250.177 282.222 249.549 281.588 249.549 280.806C249.549 280.023 250.177 279.389 250.951 279.389C251.724 279.389 252.352 280.023 252.352 280.806ZM261.225 282.222C261.999 282.222 262.626 281.588 262.626 280.806C262.626 280.023 261.999 279.389 261.225 279.389C260.451 279.389 259.824 280.023 259.824 280.806C259.824 281.588 260.451 282.222 261.225 282.222ZM272.901 280.806C272.901 281.588 272.274 282.222 271.5 282.222C270.726 282.222 270.099 281.588 270.099 280.806C270.099 280.023 270.726 279.389 271.5 279.389C272.274 279.389 272.901 280.023 272.901 280.806ZM281.775 282.222C282.549 282.222 283.176 281.588 283.176 280.806C283.176 280.023 282.549 279.389 281.775 279.389C281.001 279.389 280.374 280.023 280.374 280.806C280.374 281.588 281.001 282.222 281.775 282.222ZM293.451 280.806C293.451 281.588 292.823 282.222 292.049 282.222C291.276 282.222 290.648 281.588 290.648 280.806C290.648 280.023 291.276 279.389 292.049 279.389C292.823 279.389 293.451 280.023 293.451 280.806ZM302.324 282.222C303.098 282.222 303.725 281.588 303.725 280.806C303.725 280.023 303.098 279.389 302.324 279.389C301.55 279.389 300.923 280.023 300.923 280.806C300.923 281.588 301.55 282.222 302.324 282.222ZM314 280.806C314 281.588 313.373 282.222 312.599 282.222C311.825 282.222 311.198 281.588 311.198 280.806C311.198 280.023 311.825 279.389 312.599 279.389C313.373 279.389 314 280.023 314 280.806ZM231.802 291.194C231.802 291.977 231.175 292.611 230.401 292.611C229.627 292.611 229 291.977 229 291.194C229 290.412 229.627 289.778 230.401 289.778C231.175 289.778 231.802 290.412 231.802 291.194ZM242.077 291.194C242.077 291.977 241.45 292.611 240.676 292.611C239.902 292.611 239.275 291.977 239.275 291.194C239.275 290.412 239.902 289.778 240.676 289.778C241.45 289.778 242.077 290.412 242.077 291.194ZM250.951 292.611C251.724 292.611 252.352 291.977 252.352 291.194C252.352 290.412 251.724 289.778 250.951 289.778C250.177 289.778 249.549 290.412 249.549 291.194C249.549 291.977 250.177 292.611 250.951 292.611ZM262.626 291.194C262.626 291.977 261.999 292.611 261.225 292.611C260.451 292.611 259.824 291.977 259.824 291.194C259.824 290.412 260.451 289.778 261.225 289.778C261.999 289.778 262.626 290.412 262.626 291.194ZM271.5 292.611C272.274 292.611 272.901 291.977 272.901 291.194C272.901 290.412 272.274 289.778 271.5 289.778C270.726 289.778 270.099 290.412 270.099 291.194C270.099 291.977 270.726 292.611 271.5 292.611ZM283.176 291.194C283.176 291.977 282.549 292.611 281.775 292.611C281.001 292.611 280.374 291.977 280.374 291.194C280.374 290.412 281.001 289.778 281.775 289.778C282.549 289.778 283.176 290.412 283.176 291.194ZM292.049 292.611C292.823 292.611 293.451 291.977 293.451 291.194C293.451 290.412 292.823 289.778 292.049 289.778C291.276 289.778 290.648 290.412 290.648 291.194C290.648 291.977 291.276 292.611 292.049 292.611ZM303.725 291.194C303.725 291.977 303.098 292.611 302.324 292.611C301.55 292.611 300.923 291.977 300.923 291.194C300.923 290.412 301.55 289.778 302.324 289.778C303.098 289.778 303.725 290.412 303.725 291.194ZM312.599 292.611C313.373 292.611 314 291.977 314 291.194C314 290.412 313.373 289.778 312.599 289.778C311.825 289.778 311.198 290.412 311.198 291.194C311.198 291.977 311.825 292.611 312.599 292.611ZM240.676 271.833C241.45 271.833 242.077 271.199 242.077 270.417C242.077 269.634 241.45 269 240.676 269C239.902 269 239.275 269.634 239.275 270.417C239.275 271.199 239.902 271.833 240.676 271.833ZM231.802 301.583C231.802 302.366 231.175 303 230.401 303C229.627 303 229 302.366 229 301.583C229 300.801 229.627 300.167 230.401 300.167C231.175 300.167 231.802 300.801 231.802 301.583ZM242.077 301.583C242.077 302.366 241.45 303 240.676 303C239.902 303 239.275 302.366 239.275 301.583C239.275 300.801 239.902 300.167 240.676 300.167C241.45 300.167 242.077 300.801 242.077 301.583ZM250.951 303C251.724 303 252.352 302.366 252.352 301.583C252.352 300.801 251.724 300.167 250.951 300.167C250.177 300.167 249.549 300.801 249.549 301.583C249.549 302.366 250.177 303 250.951 303ZM262.626 301.583C262.626 302.366 261.999 303 261.225 303C260.451 303 259.824 302.366 259.824 301.583C259.824 300.801 260.451 300.167 261.225 300.167C261.999 300.167 262.626 300.801 262.626 301.583ZM271.5 303C272.274 303 272.901 302.366 272.901 301.583C272.901 300.801 272.274 300.167 271.5 300.167C270.726 300.167 270.099 300.801 270.099 301.583C270.099 302.366 270.726 303 271.5 303ZM283.176 301.583C283.176 302.366 282.549 303 281.775 303C281.001 303 280.374 302.366 280.374 301.583C280.374 300.801 281.001 300.167 281.775 300.167C282.549 300.167 283.176 300.801 283.176 301.583ZM292.049 303C292.823 303 293.451 302.366 293.451 301.583C293.451 300.801 292.823 300.167 292.049 300.167C291.276 300.167 290.648 300.801 290.648 301.583C290.648 302.366 291.276 303 292.049 303ZM303.725 301.583C303.725 302.366 303.098 303 302.324 303C301.55 303 300.923 302.366 300.923 301.583C300.923 300.801 301.55 300.167 302.324 300.167C303.098 300.167 303.725 300.801 303.725 301.583ZM312.599 303C313.373 303 314 302.366 314 301.583C314 300.801 313.373 300.167 312.599 300.167C311.825 300.167 311.198 300.801 311.198 301.583C311.198 302.366 311.825 303 312.599 303ZM250.951 271.833C251.724 271.833 252.352 271.199 252.352 270.417C252.352 269.634 251.724 269 250.951 269C250.177 269 249.549 269.634 249.549 270.417C249.549 271.199 250.177 271.833 250.951 271.833ZM262.626 270.417C262.626 271.199 261.999 271.833 261.225 271.833C260.451 271.833 259.824 271.199 259.824 270.417C259.824 269.634 260.451 269 261.225 269C261.999 269 262.626 269.634 262.626 270.417ZM271.5 271.833C272.274 271.833 272.901 271.199 272.901 270.417C272.901 269.634 272.274 269 271.5 269C270.726 269 270.099 269.634 270.099 270.417C270.099 271.199 270.726 271.833 271.5 271.833ZM283.176 270.417C283.176 271.199 282.549 271.833 281.775 271.833C281.001 271.833 280.374 271.199 280.374 270.417C280.374 269.634 281.001 269 281.775 269C282.549 269 283.176 269.634 283.176 270.417ZM292.049 271.833C292.823 271.833 293.451 271.199 293.451 270.417C293.451 269.634 292.823 269 292.049 269C291.276 269 290.648 269.634 290.648 270.417C290.648 271.199 291.276 271.833 292.049 271.833ZM303.725 270.417C303.725 271.199 303.098 271.833 302.324 271.833C301.55 271.833 300.923 271.199 300.923 270.417C300.923 269.634 301.55 269 302.324 269C303.098 269 303.725 269.634 303.725 270.417ZM312.599 271.833C313.373 271.833 314 271.199 314 270.417C314 269.634 313.373 269 312.599 269C311.825 269 311.198 269.634 311.198 270.417C311.198 271.199 311.825 271.833 312.599 271.833Z' fill='%23CF6BCB'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='360.959' y1='231.362' x2='177.389' y2='360.844' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%239975D0'/%3E%3Cstop offset='1' stop-color='%234A3FDB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat top 1.5rem center #fff;`

export const StyledSlider = styled.div`
  --dark-blue: #ffffff;
  --grayish-blue: hsl(240, 18%, 77%);
  isolation: isolate;
  width: clamp(23.4rem, 100vw, 100rem);
  height: clamp(41.7rem, 100vh, 50rem);
  
  padding: ${(props) => (props.large ? '' : '1.5rem')};
  margin-top: ${(props) => (props.large ? '-2.7rem' : '-1.5rem')};
  ${(props) => (props.large ? '' : 'display: flex;')}
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--dark-blue);
  font-family: 'Inter', sans-serif;
  
  @media(max-width: 1050px) {
    display: flex;
    padding: 1.5rem;
  }
`

export const Quote = styled.p`
  font-weight: 300;
  font-size: clamp(1.125rem, 2.222vw, 2.75rem);
  line-height: clamp(1.5rem, 3.06vw, 2.75rem);
  margin-top: 14.375rem;
  position: relative;
  left: 3.3vw;
  z-index: 1;
  max-width: 32ch;

  @media(max-width: 1050px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-top: 5rem;
    text-align: center;
    left: 0;
  }
`

export const Byline = styled.div`
  margin-top: 3rem;
  margin-left: 14.3vw;
  
  @media(max-width: 1050px) {
    margin-top: 1.1875rem;
    margin-left: 0;
  }
`

export const Name = styled.p`
  font-weight: 700;
  font-size: ${(props) => (props.large ? '1.55rem' : '0.9375rem')};
  line-height: ${(props) => (props.large ? '2.375rem' : '1.25rem')};
  @media(max-width: 1050px) {
    font-size: 0.9375rem;
    line-height: 1.25rem;
  }
`

export const Title = styled.span`
  font-weight: 500;
  color: #B9B9CE;
  margin-left: 0.625rem;
`

export const Photo = styled.img`
  width: 35.75rem;
  height: 35.75rem;
  float: right;
  margin-top:  -10.45rem;
  margin-left: 7rem;
  border-radius: 0.3125rem;

  @media(max-width: 1050px) {
    width: 15.875rem;
    height: 15.875rem;
    float: none;
    margin-right: 0;
    margin-top: 1.875rem;
  }
`

export const Background = styled.div`
  overflow: hidden;
  background: ${(props) => (props.large ? BACKGROUNDS_LARGE : BACKGROUNDS_SMALL)};
  max-height: ${(props) => (props.large ? '50rem' : '41.7rem')};
  @media(max-width: 1050px) {
    overflow: none;
    background: ${BACKGROUNDS_SMALL};
    max-height: 41.7rem;
  }
`