import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { StyledBlue } from './styles'
import { useResponsive } from '../../../../hooks'

const BackButton = ({ className = '' }: { className?: string }) => {
	const { isMobile } = useResponsive()
	return (
		<button onClick={() => window.history.go(-1)}>
      <StyledBlue
				className={`flex items-center justify-center md:p-2.5 p-2 md:w-10 md:h-10 w-8 h-8 ${className}`}>
				<FontAwesomeIcon
					icon={faArrowLeft}
					color='white'
					width={isMobile ? 10 : 17}
				/>
			</StyledBlue>
		</button>
	)
}

export default BackButton
