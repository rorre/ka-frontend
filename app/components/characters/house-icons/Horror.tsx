import React from 'react'

const Horror = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/House of Horror.svg'></object>
)

export default Horror
