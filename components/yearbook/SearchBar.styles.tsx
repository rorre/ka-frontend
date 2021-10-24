import styled from 'styled-components'

const SearchButton = styled.div`
	background: linear-gradient(112.71deg, #ab1818 17.21%, #520000 91.53%);

	@media screen and (min-width: 1023px) {
		width: 18%;
	}
`

const SearchInput = styled.input`
	@media screen and (min-width: 1023px) {
		width: 46%;
	}
`

const Dropdown = styled.div`
	@media screen and (min-width: 1023px) {
		width: 36%;
	}
`

export { SearchButton, SearchInput, Dropdown }
