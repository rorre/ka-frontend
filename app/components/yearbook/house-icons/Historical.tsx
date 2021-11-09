import React from 'react'

const Historical = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/images/House of Historical.svg'></object>
)

export default Historical
