import React from 'react'
import HorrorIcon from '../../../../public/assets/House of Horror.svg'

const Horror = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<HorrorIcon />
	</div>
)

export default Horror
