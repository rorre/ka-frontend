import React from 'react'

const Space = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4`}
		data='assets/images/House of Space.svg'></object>
)

export default Space
