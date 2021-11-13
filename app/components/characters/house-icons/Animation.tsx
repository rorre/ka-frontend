import React from 'react'

const Animation = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/House of Animation.svg'></object>
)

export default Animation
