import React from 'react'
import InstagramIcon from '../../../../public/assets/Instagram.svg'

const Instagram = ({
	width = '',
	height = '',
	backgroundColor = 'bg-dark-3',
}: {
	width: string
	height: string
	backgroundColor: string
}) => (
	<div className={`${width} ${height} ${backgroundColor}`}>
		<InstagramIcon />
	</div>
)

export default Instagram
