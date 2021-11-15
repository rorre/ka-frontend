import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { StyledRed } from './styles'

const CloseButton = ({ className = '' }: { className?: string }) => (
	<button onClick={() => window.history.go(-1)}>
		<StyledRed className={`py-2 px-3 w-10 h-10 ${className}`}>
			<FontAwesomeIcon icon={faTimes} color='white' width={16} />
		</StyledRed>
	</button>
)

export default CloseButton
