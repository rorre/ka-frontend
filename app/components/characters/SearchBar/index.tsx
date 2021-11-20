import React, { useState } from 'react'
import { SearchInput } from './styles'
import { SearchBarDropdown } from './SearchBarDropdown'
import { SearchBarButton } from './SearchBarButton'
import { useResponsive } from '../../../hooks'

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const { isMobile } = useResponsive()

	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	return isMobile ? (
		<>
			<div className='w-full pr-2 rounded bg-dark-2'>
				<SearchInput
					name='name'
					className='inline-block rounded w-9/12 p-3 text-gray-400 border-black focus:bg-dark-3  text-1.5xs focus:outline-none bg-dark-2'
					type='text'
					placeholder='Search by name'
					value={searchQuery}
					onChange={searchHandler}
				/>
				<SearchBarButton />
			</div>
			<SearchBarDropdown className='bg-dark-2 px-2 py-1.5 rounded w-full mt-6' />
		</>
	) : (
		<div className='pr-2 mx-4 rounded bg-dark-2 lg:mx-10 lg:pr-4 md:rounded-xl'>
			<SearchInput
				name='name'
				className='inline-block w-5/12 p-3 text-gray-400 border-r-2 border-black focus:bg-dark-3 lg:text-base md:text-sm text-2xs focus:outline-none bg-dark-2 md:p-6 rounded-l-xl lg:w-6/12 md:w-5/12'
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
