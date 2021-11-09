import React from 'react'

const Romance = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/images/House of Romance.svg'></object>
)

export default Romance
