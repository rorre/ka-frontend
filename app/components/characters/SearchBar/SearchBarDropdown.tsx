import React, { useState } from 'react'
import { SearchDropdown } from './styles'

export const SearchBarDropdown = () => {
	const [isDropdown, setIsDropdown] = useState(false)
	const [major, setMajor] = useState('')

	return (
		<SearchDropdown className='relative inline-block bg-transparent px-5 border-black lg:w-4/12 md:w-5/12 sm:w-6/12 text-gray-400'>
			<div className='bg-transparent'>
				<button
					onClick={() => setIsDropdown(!isDropdown)}
					type='button'
					className='inline-flex w-full text-gray-400'>
					<span className='w-11/12 text-left bg-transparent'>
						{major === '' ? 'Major' : major}
					</span>
					<svg
						className={`w-1/12 bg-transparent ${
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
					<div className='z-10 absolute mr-4 w-10/12 mt-4 text-gray-400 bg-dark-2 rounded-xl'>
						<button
							type='button'
							onClick={() => {
								setMajor('Computer Science')
							}}
							value={major}
							name='major'
							className='text-left bg-dark-3 text-gray-400 w-full border-b-2 px-6 py-2 rounded-t-lg border-dark-2'>
							Computer Science
						</button>
						<button
							type='button'
							onClick={() => {
								setMajor('Information System')
							}}
							name='major'
							value={major}
							className='text-left bg-dark-3 text-gray-400 w-full border-t-2 px-6 py-2 rounded-b-lg border-dark-2'>
							Information System
						</button>
					</div>
				)}
			</div>
		</SearchDropdown>
	)
}
