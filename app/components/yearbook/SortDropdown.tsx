import React, { useState } from 'react'
import styled from 'styled-components'

const StyledRadio = styled.input.attrs({ type: 'radio' })`
	filter: hue-rotate(140deg) brightness(0.8);
`

const SortDropdown = () => {
	const [isDropdown, setIsDropdown] = useState(false)
	const [sortBy, setSortBy] = useState('')
	const [isNameChecked, setIsNameChecked] = useState(false)
	const [isNPMChecked, setIsNPMChecked] = useState(false)

	return (
		<div className='relative inline-block bg-dark-2 px-5 py-2.5 rounded-xl border-black lg:w-3/12 md:w-4/12 sm:w-full text-gray-400'>
			<div className='bg-dark-2'>
				<button
					onClick={() => setIsDropdown(!isDropdown)}
					type='button'
					className='inline-flex w-full text-gray-400'>
					<span className='w-11/12 text-left bg-dark-2'>
						{isNameChecked ? 'Name' : isNPMChecked ? 'NPM' : 'Sort by'}
					</span>
					<svg
						className={`w-1/12 absolute right-3.5 top-2.5 mt-1 bg-dark-2 ${
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
					<div className='z-10 absolute right-0 w-full mt-4 text-gray-400 bg-dark-2 rounded-xl'>
						<button
							onClick={() => {
								setSortBy('Name')
								setIsNameChecked(true)
								setIsNPMChecked(false)
							}}
							className='relative text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full px-5 py-2 rounded-t-lg border-dark-2'>
							Name
							<label htmlFor='name'></label>
							<StyledRadio
								type='radio'
								id='name'
								name='sortBy'
								className='absolute right-4 top-3.5'
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
							className='relative text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full px-5 py-2 rounded-b-lg border-dark-2'>
							NPM
							<label htmlFor='npm'></label>
							<StyledRadio
								type='radio'
								id='npm'
								name='sortBy'
								value={sortBy}
								className='absolute right-4 top-3.5'
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
