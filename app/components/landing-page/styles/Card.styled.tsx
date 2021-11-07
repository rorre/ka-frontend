import styled from 'styled-components'

const Card = styled.div`
	background: linear-gradient(
		152.01deg,
		rgba(255, 255, 255, 0.08) 0%,
		rgba(255, 255, 255, 0.21) 98.09%
	);
	backdrop-filter: blur(4px);
	border-radius: 20px;
	padding: 54px 35px;
	height: 400px;
	max-width: 300px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.5s ease-in-out;
	margin-bottom: 20px;
	&:hover {
		transform: scale(1.1);
	}
`

export default Card
