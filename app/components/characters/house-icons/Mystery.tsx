import React from 'react'
import MysteryIcon from '../../../../public/assets/House of Mystery.svg'

const Mystery = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<MysteryIcon />
	</div>
)

export default Mystery
