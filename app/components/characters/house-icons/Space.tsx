import React from 'react'

const Space = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/House of Space.svg'></object>
)

export default Space
