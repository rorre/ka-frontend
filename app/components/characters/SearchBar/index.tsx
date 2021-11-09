import React, { useState } from 'react'
import { SearchInput } from './styles'
import { SearchBarDropdown } from './SearchBarDropdown'
import { SearchBarButton } from './SearchBarButton'

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	return (
		<div className='bg-dark-2 mx-12 pr-4 rounded-xl bg-transparent'>
			<SearchInput
				name='query'
				className='focus:outline-none inline-block bg-dark-2 p-6 rounded-l-xl lg:w-6/12 md:w-5/12 sm:w-3/12 text-gray-400 border-r-2 border-black'
				type='text'
				placeholder='Search by name'
				value={searchQuery}
				onChange={searchHandler}
			/>
			<SearchBarDropdown />
			<SearchBarButton />
		</div>
	)
}

export default SearchBar
