import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const MainNavigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	const ulClassOpen: string =
		'fixed right-0 bg-gray-500 h-full top-0 p-10 pt-16 text-white text-2xl space-y-3 z-30 min-w-max transition ease-in duration-300'
	const ulClassClose: string =
		'ml-20 2md:space-x-16 text-gray-800 2md:flex transition ease-in duration-300 3md:fixed 3md:right-0 3md:bg-gray-500 3md:h-full 3md:top-0 3md:p-10 3md:pt-16 3md:text-white 3md:text-2xl 3md:space-y-3 3md:z-30 3md:min-w-max transform 3md:translate-x-full'
	const closeButton: string =
		'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
	const burgerButton: string =
		'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
	const closeButtonClass: string = 'fixed text-gray-800 top-6 right-5 z-40'

	const burgerHandler = () => {
		const css: string = 'test'
		console.log(css)
		setIsOpen(!isOpen)
		console.log(isOpen)
	}

	return (
		<div className='flex bg-white p-5 items-center 2md:justify-start justify-between'>
			<div className='font-bold text-2xl text-gray-900 cursor-default'>
				CSUI2021
			</div>
			<svg
				onClick={burgerHandler}
				xmlns='http://www.w3.org/2000/svg'
				className={
					isOpen === false
						? 'h-7 w-7 2md:hidden cursor-pointer'
						: 'h-7 w-7 cursor-pointer' + ' ' + closeButtonClass
				}
				viewBox='0 0 20 20'
				fill='currentColor'>
				<path
					fillRule='evenodd'
					d={isOpen === false ? burgerButton : closeButton}
					clipRule='evenodd'
				/>
			</svg>
			<ul className={isOpen === false ? ulClassClose : ulClassOpen}>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/yearbook'>Yearbook</Link>
				</li>
				<li>
					<Link href='/quiz'>Quiz</Link>
				</li>
				<li className='min-w-max'>
					<Link href='/ourthoughts'>Our Thoughts</Link>
				</li>
				<li className='min-w-max'>
					<Link href='/ourpassions'>Our Passions</Link>
				</li>
			</ul>
		</div>
	)
}

export default MainNavigation
