import styled from 'styled-components'

export const BlueCorner = styled.div`
	position: absolute;
	bottom: -2;
	left: 0;
	height: 10vh;
	width: 10vh;

	background: linear-gradient(316.49deg, #3958ce -17.19%, #164f85 103.21%);
	filter: blur(50px);
	transform: rotate(166.08deg);
	box-shadow: 10px 10px 10px rgba(242, 60, 60, 0.25);

	@media screen and (max-width: 768px) {
		bottom: 0;
	}

	@media screen and (max-width: 640px) {
		bottom: 0;
	}
`
