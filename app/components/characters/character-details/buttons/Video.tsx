import React from 'react'
import { StyledRed } from './styles'
import { useResponsive } from '../../../../hooks'

const CloseButton = ({ className = '' }: { className?: string }) => {
	const { isMobile, isDesktop } = useResponsive()
	return (
		<button onClick={() => window.history.go(-1)}>
			<StyledRed
				className={`p-2 md:p-2.5 md:w-10 md:h-10 w-8 h-8 ${className}`}>
				<object
					data='/assets/Video.svg'
					width={isMobile ? 16 : isDesktop ? 40 : 20}></object>
			</StyledRed>
		</button>
	)
}

export default CloseButton
