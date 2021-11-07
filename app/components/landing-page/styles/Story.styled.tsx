import styled from 'styled-components'

const Story = styled.div`
	background: white;
	width: 320px;
	height: 450px;
	display: flex;
	color: black;
	text-align: center;
	align-items: center;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	@media (max-width: 880px) {
		min-width: 320px;
	}
	&:hover {
		transform: scale(1.1);
		margin: 0 20px;
	}
`

export default Story
