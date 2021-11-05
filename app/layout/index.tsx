import React from 'react'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<main className='w-11/12 mx-auto my-0'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
