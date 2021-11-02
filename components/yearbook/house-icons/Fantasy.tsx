import React from 'react'

const Fantasy = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4`}
		data='assets/images/House of Fantasy.svg'></object>
)

export default Fantasy
