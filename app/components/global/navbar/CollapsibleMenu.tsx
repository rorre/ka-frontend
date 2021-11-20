import React from 'react'
import { v4 as uuid } from 'uuid'
import { CollapsibleMenuInterface } from './interfaces/CollapsibleMenu.interface'
// import LoginButton from './LoginButton'
import NavLink from './NavLink'
import menus from './utils/menus'

const CollapsibleMenu = ({ collapse }: CollapsibleMenuInterface) => {
	return (
		<div
			className={`flex-col col-span-2 gap-10 p-6 text-white lg:hidden bg-dark-2 ${
				!collapse ? 'hidden' : 'flex'
			}`}>
			{Object.keys(menus).map(menu => (
				<NavLink
					key={uuid()}
					label={menu}
					url={menus[menu]}
					className='font-semibold'
				/>
			))}
			{/* <div>
				<LoginButton />
			</div> */}
		</div>
	)
}

export default CollapsibleMenu
