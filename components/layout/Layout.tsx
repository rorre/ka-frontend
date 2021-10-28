import React from 'react'
import MainNavigation from './MainNavigation'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<MainNavigation />
			<main className='my-0 mx-auto w-11/12'>{children}</main>
		</div>
	)
}

export default Layout
