import React from 'react'
import ComedyIcon from '../../../../public/assets/House of Comedy.svg'

const Comedy = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<ComedyIcon />
	</div>
)

export default Comedy
