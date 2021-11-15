import React from 'react'

const ActionIcon = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='/assets/House of Action.svg'></object>
)

export default ActionIcon
