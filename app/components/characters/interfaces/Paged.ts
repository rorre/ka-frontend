interface Paged<T> {
	data: T[]
	has_prev: boolean
	has_next: boolean
	max_page: number
}

export default Paged
