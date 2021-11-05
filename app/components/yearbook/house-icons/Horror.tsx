import React from 'react'

const Horror = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4`}
		data='assets/images/House of Horror.svg'></object>
)

export default Horror
