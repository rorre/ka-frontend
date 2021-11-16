import React from 'react'

import { ChangePageButton } from './ChangePageButton'
import { PaginationInterface } from './interfaces/Pagination.interface'
import { PaginationItem } from './PaginationItem'
import { pages } from './utils/pageNumbers'

const Pagination = ({ currentPage, setCurrentPage }: PaginationInterface) => {
	return (
		<div className='bg-dark-2 md:rounded-xl rounded md:h-16 h-10 md:space-x-2.5 space-x-1.5 md:px-4 lg:mt-16 md:mt-12 lg:mb-0 md:mb-4 mt-8 mb-4 flex flex-row justify-center max-w-min mx-auto'>
			<ChangePageButton
				onClick={() => {
					setCurrentPage(currentPage <= 1 ? currentPage : currentPage - 1)
				}}
				className='rotate-90 md:mr-4'
			/>
			{pages.map((page, index) => (
				<PaginationItem
					key={index}
					pageNumber={
						pages[index] > pages[0] + 6 && pages[index] !== pages.length
							? '...'
							: pages[index]
					}
					currentPage={pages[index] === currentPage}
					onClick={() => {
						setCurrentPage(index + 1)
					}}
				/>
			))}
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
