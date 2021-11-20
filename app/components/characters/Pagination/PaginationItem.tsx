import React from 'react'
import { StyledPaginationItem } from './styles'
import { PaginationItemInterface } from './interfaces/PaginationItem.interface'

export const PaginationItem = ({
	pageNumber,
	onClick,
	currentPage = false,
}: PaginationItemInterface) => {
	if (currentPage)
		return (
			<StyledPaginationItem
				onClick={onClick}
				className='cursor-pointer md:text-base text-xs opacity-80 hover:opacity-100 bg-purple lg:w-12 lg:h-12 md:w-9 md:h-9 w-7 h-7 text-center md:rounded-xl rounded my-auto lg:py-3 py-0'>
				{pageNumber}
			</StyledPaginationItem>
		)
	return (
		<button
			onClick={onClick}
			className='cursor-pointer md:text-base text-xs hover:bg-indigo bg-purple lg:w-12 lg:h-12 md:w-9 md:h-9 w-7 h-7 text-center md:rounded-xl rounded my-auto lg:py-3 py-1'>
			{pageNumber}
		</button>
	)
}
