import React, { useState } from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { SeeMore, StoryContainer } from '../styles'
import { contents } from './utils/[contents]'
import { Content } from './interfaces/Content.interface'
import { useHorizontalScroll } from './hooks/useHorizontalScroll.hook'
import StoryItem from './StoryItem'

const OurStories = () => {
	const [details, setDetails] = useState(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu.'
	)
	const scrollRef = useHorizontalScroll()

	return (
		<section className='h-full text-white'>
			<h2 className='my-24 text-center 2sm:text-left'>Our Stories</h2>
			<div className='2md:grid grid-cols-8'>
				<div className='col-span-3 flex flex-col items-center 3md:mb-10'>
					<p className='max-w-xs h-full flex items-center 3md:mb-10'>
						{details}
						{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
						nulla facilisi nullam vehicula ipsum a arcu. */}
					</p>
					<Link href='/ourstories'>
						<SeeMore className='animate-bounce'>See More</SeeMore>
					</Link>
				</div>
				<StoryContainer
					className='col-start-4 col-end-9 gap-5 flex overflow-x-auto p-7'
					ref={scrollRef}>
					{contents.map((content: Content) => (
						<StoryItem
							foto={content.foto}
							id={uuid()}
							key={uuid()}
							setDetails={() => {
								setDetails(content.detail)
							}}
						/>
					))}
					{/* <Link href='/ourstories1'>
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
					</Link> */}
				</StoryContainer>
			</div>
		</section>
	)
}

export default OurStories
