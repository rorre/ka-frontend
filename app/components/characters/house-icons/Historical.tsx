import React from 'react'
import HistoricalIcon from '../../../../public/assets/House of Historical.svg'

const Historical = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<HistoricalIcon />
	</div>
)

export default Historical
