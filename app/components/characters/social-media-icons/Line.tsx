import React from 'react'
import LineIcon from '../../../../public/assets/Line.svg'

const Line = ({
	width,
	height,
	backgroundColor,
}: {
	width: string
	height: string
	backgroundColor: string | null
}) => (
	<div className={`${width} ${height} ${backgroundColor}`}>
		<LineIcon />
	</div>
)

export default Line
