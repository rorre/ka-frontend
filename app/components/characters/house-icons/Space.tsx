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
		data='assets/images/House of Space.svg'></object>
)

export default Space
