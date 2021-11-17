import React from 'react'

const Apocalypse = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height}`}
		data='/assets/House of Apocalypse.svg'></object>
)

export default Apocalypse
