import styled from 'styled-components'

const MobileMessagesCard = styled.div`
	height: 100%;
	width: 100%;
	max-height: 600px;
	max-width: 320px;
	background: white;
	border-radius: 20px;
	padding: 35px 35px;
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

export default MobileMessagesCard
