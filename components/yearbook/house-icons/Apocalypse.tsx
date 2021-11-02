import React from 'react'

const Apocalypse = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4`}
		data='assets/images/House of Apocalypse.svg'></object>
)

export default Apocalypse
