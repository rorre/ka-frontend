import React from 'react'

import { ChangePageButton } from './ChangePageButton'
import { PaginationItem } from './PaginationItem'
import { pages } from './utils/pageNumbers'

const Pagination = () => {
	return (
		<div className='bg-dark-2 rounded-xl h-16 space-x-2.5 px-4 my-16 flex flex-row justify-center max-w-min mx-auto'>
			<ChangePageButton className='rotate-90 mr-4' />
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
			<ChangePageButton className='-rotate-90 ml-4' />
		</div>
	)
}

export default Pagination
