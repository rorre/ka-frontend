import React from 'react'
import Link from 'next/link'
import { SeeMore, Story } from '../styles'

const OurStories = () => {
	return (
		<div className='h-full'>
			<h2 className='my-24 text-center 2sm:text-left'>Our Stories</h2>
			<div className='2md:grid grid-cols-8'>
				<div className='col-span-3 flex flex-col items-center 3md:mb-10'>
					<p className='max-w-xs h-full flex items-center 3md:mb-10'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
						nulla facilisi nullam vehicula ipsum a arcu.{' '}
					</p>
					<Link href='/ourstories'>
						<SeeMore className='animate-bounce'>See More</SeeMore>
					</Link>
				</div>
				<div className='col-start-4 col-end-9 gap-5 flex 3md:overflow-x-scroll'>
					<Link href='/ourstories1'>
						<Story>
							<h3 className='w-full'>TITLE</h3>
						</Story>
					</Link>
					<Link href='/ourstories2'>
						<Story>
							<h3 className='w-full'>TITLE</h3>
						</Story>
					</Link>
					<Link href='/ourstories3'>
						<Story>
							<h3 className='w-full'>TITLE</h3>
						</Story>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default OurStories
