import React from 'react'
import style from './Layout.module.css'
import MainNavigation from './MainNavigation'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<MainNavigation />
			<main className={style.main}>{children}</main>
		</div>
	)
}

export default Layout
