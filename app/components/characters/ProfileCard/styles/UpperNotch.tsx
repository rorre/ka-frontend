import styled from 'styled-components'

export const UpperNotch = styled.div`
	position: absolute;
	top: -2px;
	right: 42.8%;
	height: 2rem;
	width: 2.65rem;
	z-index: 1;
	background: #13111a;
	border-width: 0 2px 2px 2px;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	display: inline-block;

	@media screen and (max-width: 768px) {
		height: 1.5rem;
		width: 2.2rem;
		right: 44.5%;
	}
`
