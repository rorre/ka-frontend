import React from 'react'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => {
	return (
		<main className='w-full bg-no-repeat bg-contain bg-shade-pattern'>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
