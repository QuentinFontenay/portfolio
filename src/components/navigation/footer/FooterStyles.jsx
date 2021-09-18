import styled from "styled-components"

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
`

export const SocialIconsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`

export const SocialContainer = styled.div`
	margin: 1.5rem 3rem 1.5rem 0;
	text-align: right;
	display: flex;
  	align-items: center;
`