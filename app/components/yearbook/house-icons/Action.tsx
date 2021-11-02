import React from 'react'

const ActionIcon = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4`}
		data='assets/images/House of Action.svg'></object>
)

export default ActionIcon
