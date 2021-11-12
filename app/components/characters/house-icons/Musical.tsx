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
		data='assets/images/House of Musical.svg'></object>
)

export default Musical
