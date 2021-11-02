import React from 'react'

const MobileTicket = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height}`}
		data='assets/images/Mobile Ticket.svg'></object>
)

export default MobileTicket
