import React from 'react'
import MusicalIcon from '../../../../public/assets/House of Musical.svg'

const Musical = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<MusicalIcon />
	</div>
)

export default Musical
