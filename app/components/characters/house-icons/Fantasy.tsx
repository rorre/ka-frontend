import React from 'react'
import FantasyIcon from '../../../../public/assets/House of Fantasy.svg'

const Fantasy = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<FantasyIcon />
	</div>
)

export default Fantasy
