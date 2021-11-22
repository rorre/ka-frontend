import React from 'react'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'
import Header from '../components/global/header'
import { LayoutInterface } from './interfaces/Layout.interface'

const Layout = ({ children }: LayoutInterface) => {
	return (
		<>
			<Header />
			<Navbar />
			<main className='relative w-full h-full'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
