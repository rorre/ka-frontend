import React from 'react'
import AnimationIcon from '../../../../public/assets/House of Animation.svg'

const Animation = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<AnimationIcon />
	</div>
)

export default Animation
