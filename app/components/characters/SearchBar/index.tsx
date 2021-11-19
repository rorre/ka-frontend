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
		<div className='bg-dark-2 lg:mx-10 md:-mx-4 mx-4 lg:pr-4 pr-2 md:rounded-xl rounded'>
			<SearchInput
				name='name'
				className='focus:bg-dark-3 lg:text-base md:text-sm text-2xs focus:outline-none inline-block bg-dark-2 md:p-6 p-3 rounded-l-xl lg:w-6/12 md:w-5/12 w-5/12 text-gray-400 border-r-2 border-black'
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
