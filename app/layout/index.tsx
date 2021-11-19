import React from 'react'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'
import Header from '../components/global/header'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<Navbar />
			<main className='w-full h-full'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
