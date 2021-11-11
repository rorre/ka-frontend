import styled from 'styled-components'

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
	filter: hue-rotate(135deg) brightness(0.8);

	@media screen and (max-width: 640px) {
		width: 10px;
	}
`
