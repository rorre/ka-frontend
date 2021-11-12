import React from 'react'

const Line = ({
	width,
	height,
	backgroundColor,
}: {
	width: string
	height: string
	backgroundColor: string | null
}) => (
	<object
		className={`${width} ${height} ${backgroundColor}`}
		data='assets/Line.svg'></object>
)

export default Line
