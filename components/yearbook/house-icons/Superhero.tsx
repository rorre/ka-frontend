import React from 'react'

const Superhero = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} bg-dark-4`}
		data='assets/images/House of Superhero.svg'></object>
)

export default Superhero
