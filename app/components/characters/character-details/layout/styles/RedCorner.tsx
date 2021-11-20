import styled from 'styled-components'

export const RedCorner = styled.div`
	position: absolute;
	bottom: -1;
	right: 10px;
	height: 10vh;
	width: 10vh;

	background: linear-gradient(162.58deg, #ab1818 0.93%, #e03838 109.38%);
	filter: blur(40px);
	transform: rotate(166.08deg);

	@media screen and (max-width: 768px) {
		bottom: 0;
	}

	@media screen and (max-width: 640px) {
		bottom: 0;
	}
`
