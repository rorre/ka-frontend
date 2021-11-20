import styled from 'styled-components'

const MessagesCard = styled.div`
	height: 600px;
	background: white;
	border-radius: 20px;
	padding: 54px 35px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.5s ease-in-out;
	margin-bottom: 20px;
	&:hover {
		transform: scale(1.025);
	}
`

export default MessagesCard
