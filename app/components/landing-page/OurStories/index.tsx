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
		<section className='h-full text-white '>
			<h2 className='my-24 text-center sm:text-left'>Our Stories</h2>
			<div className='grid-cols-8 md:grid'>
				<div className='col-span-3 m-auto md:mb-10 px-14'>
					<div className='flex flex-col items-center h-full max-w-xs text-justify 3md:mb-10'>
						<h4>{titles}</h4>
						<p className='mt-4'>{details}</p>
					</div>
				</div>
				<StoryContainer
					className='flex w-full col-start-4 col-end-9 gap-5 overflow-x-auto p-7'
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
