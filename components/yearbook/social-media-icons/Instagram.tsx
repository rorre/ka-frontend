import React from 'react'

const Instagram = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4 md:ml-0 ml-1`}
		data='assets/images/Instagram.svg'></object>
)

export default Instagram
