import React from 'react'
import SuperheroIcon from '../../../../public/assets/House of Superhero.svg'

const Superhero = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<div className={`${width} ${height}`}>
		<SuperheroIcon />
	</div>
)

export default Superhero
