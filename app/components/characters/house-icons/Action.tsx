import React from 'react'
import ActionIcon from '../../../../public/assets/House of Action.svg'

const Action = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<ActionIcon />
	</div>
)

export default Action
