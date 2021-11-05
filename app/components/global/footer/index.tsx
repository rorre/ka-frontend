import React from 'react'
import { InstagramIcon, LineIcon } from '../../yearbook/social-media-icons'
import Logo from '../logo'
import socialMedia from './utils/socialMedia'

const Footer = () => {
	const { instagram, line } = socialMedia
	return (
		<footer className='flex flex-col w-full px-12 py-5 m-0 divide-y bg-dark-2 divide-dark-3'>
			<div className='flex flex-col gap-4 my-4 lg:grid lg:grid-cols-5'>
				<div className='flex flex-col col-span-1 gap-4'>
					<span className='text-2xl text-white'>Social</span>
					<div className='flex flex-col gap-2'>
						<a
							href={instagram.url}
							className='flex items-center gap-2 text-white'>
							<InstagramIcon
								width={'w-11'}
								height={'w-11'}
								backgroundColor={'bg-transparent'}
							/>
							{instagram.name}
						</a>
						<a href={line.url} className='flex items-center gap-2 text-white'>
							<LineIcon
								width={'w-11'}
								height={'w-11'}
								backgroundColor={'bg-transparent'}
							/>
							{line.name}
						</a>
					</div>
				</div>
				<div className='flex flex-col col-span-4 gap-4'>
					<span className='text-2xl text-white'>Meet the Team</span>
				</div>
			</div>
			<div className='flex flex-col w-full gap-3 pt-4 text-white lg:items-center lg:flex-row bg-dark'>
				<Logo />
				<span className='text-sm lg:text-base'>
					Copyright © 2021 | CSUI 2021 Universitas Indonesia
				</span>
			</div>
		</footer>
	)
}

export default Footer
