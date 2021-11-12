import React, { useState } from 'react'

import { StyledRadio } from './styles'

const SortDropdown = () => {
	const [isDropdown, setIsDropdown] = useState(false)
	const [sortBy, setSortBy] = useState('')
	const [isNameChecked, setIsNameChecked] = useState(false)
	const [isNPMChecked, setIsNPMChecked] = useState(false)

	return (
		<div className='md:h-full h-6 relative inline-block bg-dark-2 md:px-5 px-3 lg:py-2.5 md:py-1.5 lg:rounded-xl md:rounded-md rounded-md border-black lg:w-3/12 md:w-4/12 w-5/12 text-gray-400'>
			<button
				onClick={() => setIsDropdown(!isDropdown)}
				type='button'
				className='bg-dark-2 inline-flex w-full text-gray-400'>
				<span className='w-11/12 text-left md:text-sm lg:text-base text-2xs bg-dark-2'>
					{isNameChecked ? 'Name' : isNPMChecked ? 'NPM' : 'Sort by'}
				</span>
				<svg
					className={`w-1/12 absolute right-3.5 lg:top-2.5 top-1.5 md:mt-1 bg-dark-2 ${
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

			<div>
				{isDropdown && (
					<div className='z-10 absolute right-0 w-full mt-4 text-gray-400 bg-dark-2 rounded-xl'>
						<button
							onClick={() => {
								setSortBy('Name')
								setIsNameChecked(true)
								setIsNPMChecked(false)
							}}
							className='relative text-left bg-dark-3 hover:bg-dark-2 md:px-5 py-2 px-3 md:text-sm lg:text-base text-2xs w-full rounded-t-lg border-dark-2'>
							Name
							<label htmlFor='name'></label>
							<StyledRadio
								type='radio'
								id='name'
								name='sortBy'
								className='absolute md:right-4 right-2 md:top-3.5 top-2.5'
								value={sortBy}
								onChange={() => {
									setSortBy('Name')
									setIsNameChecked(true)
									setIsNPMChecked(false)
								}}
								checked={isNameChecked}
							/>
						</button>
						<button
							onClick={() => {
								setSortBy('Name')
								setIsNPMChecked(true)
								setIsNameChecked(false)
							}}
							className='relative text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full md:px-5 py-2 px-3 md:text-sm lg:text-base text-2xs rounded-b-lg border-dark-2'>
							NPM
							<label htmlFor='npm'></label>
							<StyledRadio
								type='radio'
								id='npm'
								name='sortBy'
								value={sortBy}
								className='absolute md:right-4 right-2 md:top-3.5 top-2.5'
								onChange={() => {
									setSortBy('NPM')
									setIsNPMChecked(true)
									setIsNameChecked(false)
								}}
								checked={isNPMChecked}
							/>
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default SortDropdown
