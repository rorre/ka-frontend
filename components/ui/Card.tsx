import style from './Card.module.css'
import React from 'react'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const Card = ({ children }: Props) => {
	return <div className={style.card}>{children}</div>
}

export default Card
