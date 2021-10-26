import React, { useState } from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
	filter: hue-rotate(135deg) brightness(0.8);
`

const FilterDropdown = () => {
	const [isDropdown, setIsDropdown] = useState(false)
	const [isCSChecked, setIsCSChecked] = useState(false)
	const [isSIChecked, setIsSIChecked] = useState(false)
	const [filters, setFilters] = useState([] as string[])

	const filterHandler = (filter: string) => {
		if (filter === 'CS') {
			setIsCSChecked(!isCSChecked)
			if (isCSChecked) {
				const newFilters = filters
				newFilters.push('Computer Science')
				setFilters(newFilters)
			} else {
				const newFilters = filters.filter(
					filter => filter !== 'Computer Science'
				)
				setFilters(newFilters)
			}
		} else if (filter === 'SI') {
			setIsSIChecked(!isSIChecked)
			if (isSIChecked) {
				const newFilters = filters
				newFilters.push('Information System')
				setFilters(newFilters)
			} else {
				const newFilters = filters.filter(
					filter => filter !== 'Information System'
				)
				setFilters(newFilters)
			}
		}
	}

	return (
		<div className='relative inline-block bg-dark-2 px-5 py-2.5 border-black rounded-xl lg:w-3/12 md:w-4/12 sm:w-full text-gray-400'>
			<div className='bg-dark-2'>
				<button
					onClick={() => setIsDropdown(!isDropdown)}
					type='button'
					className='inline-flex w-full text-gray-400'>
					<span className='w-11/12 text-left bg-dark-2'>Filter</span>
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
					<div className='z-10 absolute w-full right-0 mt-4 text-gray-400 bg-dark-2 rounded-xl'>
						<button
							type='button'
							onClick={() => filterHandler('CS')}
							className='relative text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full px-5 py-2 rounded-t-lg border-dark-2'>
							Computer Science
							<StyledCheckbox
								onChange={() => filterHandler('CS')}
								type='checkbox'
								className='absolute right-4 top-3.5'
								checked={isCSChecked}
								name='filters'
								value={filters}
							/>
						</button>
						<button
							type='button'
							onClick={() => filterHandler('SI')}
							className='relative text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full px-5 py-2 rounded-b-lg border-dark-2'>
							Information System
							<StyledCheckbox
								type='checkbox'
								onChange={() => filterHandler('SI')}
								className='absolute right-4 top-3.5'
								checked={isSIChecked}
								name='filters'
								value={filters}
							/>
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FilterDropdown
