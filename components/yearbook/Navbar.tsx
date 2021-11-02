import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavTitle = styled.span`
	background: -webkit-linear-gradient(150deg, #ff5656 30.1%, #2a98ff 70.01%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const Navbar = () => {
	return (
		<div className='md:flex w-full bg-transparent relative'>
			<h1 className='md:w-3/12 inline pl-10 my-8 text-4xl font-bold bg-transparent'>
				<NavTitle>CSUI2021</NavTitle>
			</h1>
			<div className='inline-block lg:ml-28 md:ml-16 text-white my-10 bg-transparent'>
				<ul className='bg-transparent'>
					<li className='hover:text-blue-dark inline lg:pr-10 md:pr-6 text-lg bg-transparent'>
						<Link href='/'>
							<a className='bg-transparent'>Home</a>
						</Link>
					</li>
					<li className='hover:text-blue-dark inline lg:px-10 md:px-6 text-lg bg-transparent'>
						<Link href='/yearbook'>
							<a className='bg-transparent'>Characters</a>
						</Link>
					</li>
					<li className='hover:text-blue-dark inline lg:px-10 md:px-6 text-lg bg-transparent'>
						<Link href='/thoughts'>
							<a className='bg-transparent'>Thoughts</a>
						</Link>
					</li>
					<li className='hover:text-blue-dark inline lg:pl-10 md:pl-6 text-lg bg-transparent'>
						<Link href='/passions'>
							<a className='bg-transparent'>Passions</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
