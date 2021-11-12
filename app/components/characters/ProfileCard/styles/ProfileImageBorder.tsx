import styled from 'styled-components'

export const ProfileImageBorder = styled.div`
	position: relative;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 5%;
		padding: 4px;
		background: linear-gradient(316.49deg, #04091c -17.19%, #164f85 103.21%);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: destination-out;
		mask-composite: exclude;
	}
`
