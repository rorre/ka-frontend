import React, { useState } from 'react'
import style from './SearchBar.module.css'

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<div className='bg-dark-2 mx-8 p-1 rounded-xl'>
			<input
				className='focus:outline-none inline-block bg-dark-2 p-6 rounded-l-xl lg:w-6/12 md:w-5/12 sm:w-3/12 text-gray-400 border-r-2 border-black'
				type='text'
				placeholder='Search for a name'
				value={searchQuery}
				onChange={event => setSearchQuery(event.target.value)}
			/>
			<SearchBarDropdown />
			<SearchButton />
		</div>
	)
}

const SearchButton = () => (
	<button
		className={`${style.searchBarButton} text-white lg:w-2/12 md:w-2/12 sm:w-3/12 inline-block py-4 text-center rounded-lg`}>
		Search
	</button>
)

const SearchBarDropdown = () => {
	const [isDropdown, setIsDropdown] = useState(false)
	const [major, setMajor] = useState('')

	return (
		<div className='relative inline-block bg-dark-2 px-5 border-black lg:w-4/12 md:w-5/12 sm:w-6/12 text-gray-400'>
			<div className='bg-dark-2'>
				<button
					onClick={() => setIsDropdown(!isDropdown)}
					type='button'
					className='inline-flex w-full text-gray-400'>
					<span className='w-11/12 text-left bg-dark-2'>
						{major === '' ? 'Major' : major}
					</span>
					<svg
						className={`w-1/12 bg-dark-2 ${
							isDropdown && 'transform rotate-180'
						}`}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='gray'
						aria-hidden='true'>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</div>
			<div>
				{isDropdown && (
					<div className='absolute mr-4 w-10/12 mt-4 text-gray-400 bg-dark-2 rounded-xl'>
						<button
							type='button'
							onClick={() => {
								setMajor('Computer Science')
								setIsDropdown(!isDropdown)
							}}
							className='text-left bg-dark-3 text-gray-400 w-full border-b-2 px-6 py-2 rounded-t-lg border-dark-2'>
							Computer Science
						</button>
						<button
							type='button'
							onClick={() => {
								setMajor('Information System')
								setIsDropdown(!isDropdown)
							}}
							className='text-left bg-dark-3 text-gray-400 w-full border-t-2 px-6 py-2 rounded-b-lg border-dark-2'>
							Information System
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default SearchBar
