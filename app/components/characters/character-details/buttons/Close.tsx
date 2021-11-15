import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { StyledRed } from './styles'
import { useResponsive } from '../../../../hooks'

const CloseButton = ({ className = '' }: { className?: string }) => {
	const { isMobile } = useResponsive()
	return (
		<button onClick={() => window.history.go(-1)}>
			<StyledRed
				className={`md:py-2 md:px-3 py-2 px-2.5 md:w-10 md:h-10 w-8 h-8${className}`}>
				<FontAwesomeIcon
					icon={faTimes}
					color='white'
					width={isMobile ? 12 : 16}
				/>
			</StyledRed>
		</button>
	)
}

export default CloseButton
