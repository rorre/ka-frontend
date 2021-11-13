import React from 'react'
import Link from 'next/link'
import LogoIcon from './styles/LogoIcon.styled'

const Logo = () => {
	return (
		<Link href='/' passHref>
			<a>
				<LogoIcon className='text-3xl font-bold lg:text-4xl '>
					CSUI2021
				</LogoIcon>
			</a>
		</Link>
	)
}

export default Logo
