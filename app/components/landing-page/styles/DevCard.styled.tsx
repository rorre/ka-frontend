import styled from 'styled-components'

const DevCard = styled.div`
	position: absolute;
	width: 927px;
	height: 374px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: #1d1a27;
	border-radius: 20px;
	@media (max-width: 1000px) {
		width: 80vw;
	}
	@media (max-width: 430px) {
		height: 80vw;
	}
`

export default DevCard
