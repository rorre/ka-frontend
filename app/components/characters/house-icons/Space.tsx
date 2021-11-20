import React from 'react'
import SpaceIcon from '../../../../public/assets/House of Space.svg'

const Space = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<SpaceIcon />
	</div>
)

export default Space
