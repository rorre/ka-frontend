import React from 'react'
import { StyledRed } from './styles'

const CloseButton = ({ className = '' }: { className?: string }) => (
	<button onClick={() => window.history.go(-1)}>
		<StyledRed className={`p-2.5 w-10 h-10 ${className}`}>
			<object data='/assets/Video.svg' width={20}></object>
		</StyledRed>
	</button>
)

export default CloseButton
