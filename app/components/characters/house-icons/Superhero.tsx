import React from 'react'

const Superhero = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/House of Superhero.svg'></object>
)

export default Superhero
