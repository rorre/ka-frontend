import React from 'react'
import Link from 'next/link'

const MainNavigation = () => {
	return (
		<div className='flex bg-white p-5 items-center'>
			<div className='font-bold text-2xl text-gray-900'>CSUI2021</div>
			<ul className='flex ml-20 space-x-16 text-gray-800'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/yearbook'>Yearbook</Link>
				</li>
				<li>
					<Link href='/quiz'>Quiz</Link>
				</li>
				<li>
					<Link href='/ourthoughts'>Our Thoughts</Link>
				</li>
				<li>
					<Link href='/ourpassions'>Our Passions</Link>
				</li>
			</ul>
		</div>
	)
}

export default MainNavigation
