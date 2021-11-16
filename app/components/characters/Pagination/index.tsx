import React from 'react'

import { ChangePageButton } from './ChangePageButton'
import { PaginationInterface } from './interfaces/Pagination.interface'
import { PaginationItem } from './PaginationItem'

const Pagination = ({
	currentPage,
	setCurrentPage,
	maxPage,
}: PaginationInterface) => {
	let startNumber: number
	if (maxPage < 7) {
		// Enforce 1 as start if total pages are below 7
		startNumber = 1
	} else {
		if (currentPage < maxPage - 3) {
			startNumber = currentPage < 7 ? 1 : currentPage - 5
		} else {
			startNumber = maxPage - 8
		}
	}

	const paginationItems: JSX.Element[] = []
	for (let i = 0; i < Math.min(7, maxPage); i++) {
		paginationItems.push(
			<PaginationItem
				key={i}
				pageNumber={startNumber + i}
				currentPage={startNumber + i === currentPage}
				onClick={() => {
					console.log(i)
					setCurrentPage(startNumber + i)
				}}
			/>
		)
	}

	if (maxPage > 8) {
		// If there are 1 to 7 pages, we want it to render
		// all of the numbers, no dots and everything.
		if (currentPage >= maxPage - 3) {
			paginationItems.push(
				<PaginationItem
					key={'secondLast'}
					pageNumber={maxPage - 1}
					currentPage={maxPage - 1 === currentPage}
					onClick={() => {
						setCurrentPage(maxPage - 1)
					}}
				/>
			)
		} else {
			paginationItems.push(
				<PaginationItem
					key={'secondLast'}
					pageNumber={'...'}
					currentPage={false}
					onClick={() => {}}
				/>
			)
		}
	}

	return (
		<div className='bg-dark-2 md:rounded-xl rounded md:h-16 h-10 md:space-x-2.5 space-x-1.5 md:px-4 lg:mt-16 md:mt-12 lg:mb-0 md:mb-4 mt-8 mb-4 flex flex-row justify-center max-w-min mx-auto'>
			<ChangePageButton
				onClick={() => {
					setCurrentPage(currentPage <= 1 ? currentPage : currentPage - 1)
				}}
				className='rotate-90 md:mr-4'
			/>
			{paginationItems}
			{maxPage > 9 && (
				<PaginationItem
					key='lastPage'
					pageNumber={maxPage}
					currentPage={currentPage == maxPage}
					onClick={() => {
						setCurrentPage(maxPage)
					}}
				/>
			)}
			<ChangePageButton
				onClick={() => {
					setCurrentPage(currentPage + 1)
				}}
				className='-rotate-90 md:ml-4'
			/>
		</div>
	)
}

export default Pagination
