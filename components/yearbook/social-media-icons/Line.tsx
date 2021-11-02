import React from 'react'

const Line = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4 md:mr-0 mr-1`}
		data='assets/images/Line.svg'></object>
)

export default Line
