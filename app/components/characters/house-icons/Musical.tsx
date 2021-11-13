import React from 'react'

const Musical = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/House of Musical.svg'></object>
)

export default Musical
