import React from 'react'

import { ChangePageButton } from './ChangePageButton'
import { PaginationItem } from './PaginationItem'
import { pages } from './utils/pageNumbers'

const Pagination = () => {
	return (
		<div className='bg-dark-2 md:rounded-xl rounded md:h-16 h-10 md:space-x-2.5 space-x-1.5 md:px-4 lg:mt-16 md:mt-12 lg:mb-0 md:mb-4 mt-8 mb-4 flex flex-row justify-center max-w-min mx-auto'>
			<ChangePageButton className='rotate-90 md:mr-4' />
			{pages.map((page, index) => (
				<PaginationItem
					key={index}
					pageNumber={
						pages[index] > pages[0] + 6 && pages[index] !== pages.length
							? '...'
							: pages[index]
					}
					currentPage={pages[index] === 2 && true}
				/>
			))}
			<ChangePageButton className='-rotate-90 md:ml-4' />
		</div>
	)
}

export default Pagination
