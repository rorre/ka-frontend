import React from 'react'
import ApocalypseIcon from '../../../../public/assets/House of Apocalypse.svg'

const Apocalypse = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<ApocalypseIcon />
	</div>
)

export default Apocalypse
