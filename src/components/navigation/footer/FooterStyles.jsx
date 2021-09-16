import styled from "styled-components"

export const FooterWrapper = styled.section`
	/* width: calc(100vw - 96px); */
	max-width: 1840px;
	padding: 6rem 44px 0px;
	/* margin: 1rem auto; */
	box-sizing: content-box;
	background-color: #17181D;
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	&:hover {
		color: #fff;
		left: 6px;
	}
`

export const SocialIconsContainer = styled.div`
	max-width: 1840px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`

export const CompanyContainer = styled.div`
  	display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
`


export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
`

export const SocialContainer = styled.div`
	display: flex;
  	align-items: center;
	margin: 1rem auto;
`


export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  	display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  	padding: 40px 0 28px;
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`

export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;
`