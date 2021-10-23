import React from 'react'
import {
	YearbookSearchBar,
	YearbookContainer,
	YearbookNavbar,
} from '../../components/yearbook'

const CharactersPage = () => {
	return (
		<div>
			<YearbookNavbar />
			<YearbookContainer>
				<h1 className='flex justify-center mt-16 text-6xl font-bold text-white'>
					Our Characters
				</h1>
				<p className='flex justify-center mb-20 mt-8 text-white text-center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc,
					leo eros, tellus sit eget auctor.
				</p>
				<YearbookSearchBar />
			</YearbookContainer>
		</div>
	)
}

export default CharactersPage
