import React from 'react'
import { v4 as uuid } from 'uuid'
import Link from 'next/link'
import NavLink from './NavLink'
import Logo from './styles/Logo.styled'
import menus from './utils/menus'
import LoginButton from './LoginButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	return (
		<nav className='grid items-center w-full grid-cols-2 px-8 py-4 bg-transparent md:px-12 md:py-8 md:grid-cols-6'>
			<div className='col-span-1 bg-transparent'>
				<Link href='/' passHref>
					<a>
						<Logo className='text-3xl font-bold md:text-4xl '>CSUI2021</Logo>
					</a>
				</Link>
			</div>
			<div className='flex justify-end col-span-1 md:hidden'>
				<button className='w-10 h-10 p-3 text-white rounded-full bg-dark-2'>
					<FontAwesomeIcon icon={['fas', 'bars']} size='lg' />
				</button>
			</div>
			<div
				className={`hidden text-white md:col-span-4 md:grid md:grid-cols-${
					Object.keys(menus).length
				}`}>
				{Object.keys(menus).map(menu => (
					<NavLink key={uuid()} label={menu} url={menus[menu]} />
				))}
			</div>
			<div className='hidden md:flex md:justify-end'>
				<LoginButton />
			</div>
		</nav>
	)
}

export default Navbar
