import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import NavLink from './NavLink'
import menus from './utils/menus'
import LoginButton from './LoginButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CollapsibleMenu from './CollapsibleMenu'
import Logo from '../logo'

const Navbar = () => {
	const [isCollapse, setCollapse] = useState(false)
	const [isScroll, setScroll] = useState(false)

	const icon = !isCollapse ? 'bars' : 'times'

	useEffect(() => {
		window.addEventListener('scroll', () =>
			!window.scrollY ? setScroll(false) : setScroll(true)
		)
	}, [])

	return (
		<nav
			className={` w-full top-0 fixed min-w-max z-10 ${
				!isCollapse && !isScroll ? 'bg-transparent' : 'bg-dark-2'
			}`}>
			<div className='grid items-center w-full grid-cols-2 px-6 py-4 lg:px-12 lg:py-4 lg:grid-cols-6'>
				<div className='col-span-1 bg-transparent'>
					<Logo />
				</div>
				<div className='flex justify-end col-span-1 lg:hidden'>
					<button
						className='w-10 h-10 p-3 text-white rounded-full bg-dark-2 filter drop-shadow-2xl'
						onClick={() => setCollapse(!isCollapse)}>
						<FontAwesomeIcon icon={['fas', icon]} size='lg' />
					</button>
				</div>
				<div
					className={`hidden text-white lg:col-span-4 lg:grid lg:grid-cols-${
						Object.keys(menus).length
					}`}>
					{Object.keys(menus).map(menu => (
						<div key={uuid()} className='flex justify-center col-span-1'>
							<NavLink label={menu} url={menus[menu]} />
						</div>
					))}
				</div>
				<div className='hidden lg:flex lg:justify-end'>
					<LoginButton />
				</div>
			</div>
			<CollapsibleMenu collapse={isCollapse} />
		</nav>
	)
}

export default Navbar
