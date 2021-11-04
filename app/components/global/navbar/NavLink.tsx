import React from 'react'
import Link from 'next/link'
import { NavLinkInterface } from './interfaces/NavLink.interface'

const NavLink = ({ label, url, className = null }: NavLinkInterface) => {
	return (
		<div className='flex justify-center col-span-1'>
			<Link href={url} passHref>
			<a
				className={`hover:text-blue-dark filter hover:drop-shadow-blue-dark ${className}`}>
					{label}
				</a>
			</Link>
		</div>
	)
}

export default NavLink
