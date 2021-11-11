import React from 'react'
import { StyledPaginationItem } from './styles'

export const PaginationItem = ({
	pageNumber,
	currentPage = false,
}: {
	pageNumber: number | string
	currentPage?: boolean
}) => {
	if (currentPage)
		return (
			<StyledPaginationItem className='cursor-pointer bg-dark-3 lg:w-12 lg:h-12 w-9 h-9 text-center rounded-xl my-auto lg:py-3 py-1'>
				{pageNumber}
			</StyledPaginationItem>
		)
	return (
		<button className='cursor-pointer bg-dark-3 lg:w-12 lg:h-12 w-9 h-9 text-center rounded-xl my-auto lg:py-3 py-1'>
			{pageNumber}
		</button>
	)
}
