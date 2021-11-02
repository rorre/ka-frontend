import React from 'react'
import styled from 'styled-components'

const StyledPaginationItem = styled.button`
	background: linear-gradient(112.71deg, #ab1818 17.21%, #520000 91.53%);
	box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
	color: white;
`

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Pagination = () => {
	return (
		<div className='bg-dark-2 rounded-xl h-16 space-x-2.5 px-4 mx-auto my-16 flex flex-row justify-center w-max'>
			<NextPageButton className='rotate-90 mr-4' />
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
			<NextPageButton className='-rotate-90 ml-4' />
		</div>
	)
}

const NextPageButton = ({ className = 'rotate-90' }: { className: string }) => (
	<button type='button' className='w-12 text-gray-400'>
		<svg
			className={`transform ${className} bg-transparent`}
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
)

const PaginationItem = ({
	pageNumber,
	currentPage = false,
}: {
	pageNumber: number | string
	currentPage?: boolean
}) => {
	if (currentPage)
		return (
			<StyledPaginationItem className='cursor-pointer bg-dark-3 w-12 h-12 text-center rounded-xl my-auto py-3'>
				{pageNumber}
			</StyledPaginationItem>
		)
	return (
		<button className='cursor-pointer bg-dark-3 w-12 h-12 text-center rounded-xl my-auto py-3'>
			{pageNumber}
		</button>
	)
}

export default Pagination
