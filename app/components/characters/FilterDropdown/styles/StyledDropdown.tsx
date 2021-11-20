import styled from 'styled-components'

export const StyledDropdown = styled.div`
	&::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 100vh;
		background-color: #13111a;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #5e5b71;
		border-radius: 100vh;
		border: 3px solid #edf2;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #5e5b71;
	}
`
