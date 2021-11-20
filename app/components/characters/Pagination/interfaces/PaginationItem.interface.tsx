export interface PaginationItemInterface {
	pageNumber: number | string
	onClick: () => void
	currentPage?: boolean
}
