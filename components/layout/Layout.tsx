import React from 'react'
import style from './Layout.module.css'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<main className={style.main}>{children}</main>
		</div>
	)
}

export default Layout
