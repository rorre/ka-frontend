import axios from 'axios'
import { useState } from 'react'
import { Paged, Student } from '../interfaces'

export const useFilter = () => {
	const url = process.env.NEXT_PUBLIC_BASE_URL + '/student/list?'

	const [isLoading, setIsLoading] = useState(false)
	const [students, setStudents] = useState([] as Student[])
	const [query, setQuery] = useState(new URLSearchParams())
	const [currentPage, setCurrentPage] = useState(1)
	const [maxPage, setMaxPage] = useState(22)

	const getStudents = async () => {
		query.set('page', currentPage.toString())

		try {
			setIsLoading(true)
			const { data } = await axios.get<Paged<Student>>(
				`${url}${query.toString()}`
			)
			setStudents(data.data)
			setMaxPage(data.max_page)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			console.log(error)
			return []
		}
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(event.currentTarget)
		const data = Array.from(formData.entries())

		const params = data
			.map(
				param =>
					`${encodeURIComponent(param[0])}=${encodeURIComponent(
						param[1] as string
					)}`
			)
			.join('&')

		const queryParams = new URLSearchParams(params)

		// Reset page back to 1 on filter change
		setCurrentPage(1)
		setQuery(queryParams)

		event.preventDefault()
	}

	return {
		getStudents,
		setCurrentPage,
		handleSubmit,
		currentPage,
		isLoading,
		students,
		maxPage,
		query,
	}
}
