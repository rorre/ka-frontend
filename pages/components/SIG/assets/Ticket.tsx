import React from 'react'

const Ticket = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height}`}
		data='assets/images/Ticket.svg'></object>
)

export default Ticket
