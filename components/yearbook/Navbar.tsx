import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className='md:flex w-full bg-transparent relative'>
			<h1 className='md:w-3/12 inline pl-10 my-8 text-4xl font-bold'>
				<span className={style.navTitle}>CSUI2021</span>
			</h1>
			<div className='inline-block lg:ml-28 md:ml-16 text-white my-10'>
				<ul>
					<li className='hover:text-blue-dark inline lg:pr-10 md:pr-6 text-lg'>
						<Link href='/'>Home</Link>
					</li>
					<li className='hover:text-blue-dark inline lg:px-10 md:px-6 text-lg'>
						<Link href='/characters'>Characters</Link>
					</li>
					<li className='hover:text-blue-dark inline lg:px-10 md:px-6 text-lg'>
						<Link href='/thoughts'>Thoughts</Link>
					</li>
					<li className='hover:text-blue-dark inline lg:pl-10 md:pl-6 text-lg'>
						<Link href='/passions'>Passions</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
