import React, { useState } from 'react'
import { StoryContainer } from '../styles'
import { contents } from './utils/contents'
import { Content } from './interfaces/Content.interface'
import { useHorizontalScroll } from './hooks/useHorizontalScroll.hook'
import StoryItem from './StoryItem'

const OurStories = () => {
	const [details, setDetails] = useState(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu.'
	)
	const [titles, setTitles] = useState('Click one of the picture!')
	const [isClickedGlobal, setIsClickedGlobal] = useState(-1)
	const scrollRef = useHorizontalScroll()

	return (
		<section className='h-full text-white mx-auto max-w-9/10'>
			<h2 className='my-24 3md:mb-5 text-center 2md:text-left'>Our Stories</h2>
			<div className='2md:grid grid-cols-8'>
				<div className='col-span-3 m-auto 3md:mb-10'>
					<div className='2md:max-w-xs 3sm:max-w-xs h-full flex flex-col items-center 3md:mb-10 mx-auto'>
						<h4>{titles}</h4>
						<p className='mt-4 text-justify'>{details}</p>
					</div>
				</div>
				<StoryContainer
					className='col-start-4 col-end-9 gap-5 flex overflow-x-auto p-7'
					ref={scrollRef}>
					{contents.map((content: Content) => (
						<StoryItem
							{...content}
							key={content.id}
							setDetails={setDetails}
							setTitles={setTitles}
							setIsClickedGlobal={setIsClickedGlobal}
							isClickedGlobal={isClickedGlobal}
						/>
					))}
				</StoryContainer>
			</div>
		</section>
	)
}

export default OurStories
