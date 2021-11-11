import styled from 'styled-components'

export const StyledRadio = styled.input.attrs({ type: 'radio' })`
	filter: hue-rotate(140deg) brightness(0.8);

	@media screen and (max-width: 640px) {
		width: 10px;
	}
`
