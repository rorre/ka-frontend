import React from 'react'

const RequestSIGButton = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height}`}
		data='assets/images/Request SIG Button.svg'></object>
)

export default RequestSIGButton
