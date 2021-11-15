import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { StyledBlue } from './styles'

const BackButton = ({ className = '' }: { className?: string }) => (
	<button onClick={() => window.history.go(-1)}>
		<StyledBlue className={`p-2.5 w-10 h-10 ${className}`}>
			<FontAwesomeIcon icon={faArrowLeft} color='white' width={17} />
		</StyledBlue>
	</button>
)

export default BackButton
