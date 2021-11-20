import React, { useEffect, useState } from 'react'
import { StoryContainer } from '../styles'
import { Content } from './interfaces/Content.interface'
import { useHorizontalScroll } from './hooks/useHorizontalScroll.hook'
import StoryItem from './StoryItem'
import axios from 'axios'

const OurStories = () => {
	const [stories, setStories] = useState([])
	const [details, setDetails] = useState('Too see our stories, so far')
	const [titles, setTitles] = useState('Click one of the picture!')
	const [isClickedGlobal, setIsClickedGlobal] = useState(-1)
	const scrollRef = useHorizontalScroll()

	const getStories = async () => {
		try {
			const { data }: { data: [] } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/story/list`
			)
			setStories(data)
		} catch (err) {}
	}

	useEffect(() => {
		getStories()
	}, [])

	return (
		<section className='h-full mx-auto text-white max-w-9/10'>
			<h2 className='my-24 text-center 3md:mb-5 2md:text-left'>Our Stories</h2>
			<div className='grid-cols-8 2md:grid'>
				<div className='col-span-3 m-auto 3md:mb-10'>
					<div className='flex flex-col items-center h-full mx-auto 2md:max-w-xs 3sm:max-w-xs 3md:mb-10'>
						<h4 className='text-center'>{titles}</h4>
						<p className='mt-4 text-justify'>{details}</p>
					</div>
				</div>
				<StoryContainer
					className='flex col-start-4 col-end-9 gap-5 overflow-x-auto p-7'
					ref={scrollRef}>
					{stories.map((content: Content) => (
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
