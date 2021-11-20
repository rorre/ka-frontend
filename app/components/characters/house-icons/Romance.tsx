import React from 'react'
import RomanceIcon from '../../../../public/assets/House of Romance.svg'

const Romance = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<RomanceIcon />
	</div>
)

export default Romance
