import React from 'react'
import VideoIcon from '../../../../../public/assets/Video.svg'
import { StyledRed } from './styles'
import { ButtonInterface } from './interfaces'

const VideoButton = ({ className = '', onClick }: ButtonInterface) => {
	return (
		<button onClick={onClick}>
			<StyledRed className={`p-2 md:p-2 md:w-10 md:h-10 w-8 h-8 ${className}`}>
				<VideoIcon />
			</StyledRed>
		</button>
	)
}

export default VideoButton
