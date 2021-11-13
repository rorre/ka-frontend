import React from 'react'
import { StyledPaginationItem } from './styles'
import { PaginationItemInterface } from './interfaces/PaginationItem.interface'

export const PaginationItem = ({
	pageNumber,
	currentPage = false,
}: PaginationItemInterface) => {
	if (currentPage)
		return (
			<StyledPaginationItem className='cursor-pointer md:text-base text-xs bg-dark-3 lg:w-12 lg:h-12 md:w-9 md:h-9 w-7 h-7 text-center md:rounded-xl rounded my-auto lg:py-3 py-0'>
				{pageNumber}
			</StyledPaginationItem>
		)
	return (
		<button className='cursor-pointer md:text-base text-xs bg-dark-3 lg:w-12 lg:h-12 md:w-9 md:h-9 w-7 h-7 text-center md:rounded-xl rounded my-auto lg:py-3 py-1'>
			{pageNumber}
		</button>
	)
}
