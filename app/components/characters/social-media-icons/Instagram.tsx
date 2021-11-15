import React from 'react'

const Instagram = ({
	width = '',
	height = '',
	backgroundColor = 'bg-dark-3',
}: {
	width: string
	height: string
	backgroundColor: string
}) => (
	<object
		className={`${width} ${height} ${backgroundColor}`}
		data='assets/Instagram.svg'></object>
)

export default Instagram
