import React, { useEffect, useState } from 'react'
import Header from '../../app/components/global/header'
import Link from 'next/link'
import axios from 'axios'
import {
	YearbookSearchBar,
	YearbookProfileCard,
	YearbookMobileProfileCard,
	YearbookFilterDropdown,
	YearbookSortDropdown,
	YearbookPagination,
	YearbookContainer,
} from '../../app/components/characters'
import { useResponsive } from '../../app/hooks'
import { Student } from '../../app/components/characters/interfaces'

const CharactersPage = () => {
	const [students, setStudents] = useState([] as Student[])
	const [query, setQuery] = useState('')
	const { isMobile } = useResponsive()
	const url = process.env.NEXT_PUBLIC_BASE_URL + '/student/list?'
	const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + `/assets/student`

	const getStudents = async () => {
		try {
			const { data } = await axios.get(`${url}${query}`)
			setStudents(data as Student[])
		} catch (error) {
			console.log(error)
			return []
		}
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(event.currentTarget)
		const data = Array.from(formData.entries())
		console.log(data)

		const params = data
			.map(
				param =>
					`${encodeURIComponent(param[0])}=${encodeURIComponent(
						param[1] as string
					)}`
			)
			.join('&')

		const queryParams = new URLSearchParams(params).toString()

		setQuery(queryParams)

		event.preventDefault()
	}

	useEffect(() => {
		getStudents()
	}, [query])

	return (
		<>
			<Header />
			<YearbookContainer>
				<h1 className='flex justify-center mt-24 md:mt-20 text-3xl font-bold text-center text-white md:text-6xl'>
					Our Characters
				</h1>
				<p className='flex justify-center md:mt-8 mt-4 mb-20 text-center text-white bg-transparent md:text-base text-xs'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc,
					leo eros, tellus sit eget auctor.
				</p>
				<form
					id='characters'
					name='yearbookForm'
					className='z-10 md:mx-8 lg:mx-20'
					action=''
					onSubmit={handleSubmit}>
					<YearbookSearchBar />
					<div className='z-10 flex justify-center mb-8 space-x-2.5 bg-transparent md:flex-row md:space-x-5 md:space-y-0 lg:mt-14 md:mt-10 mt-6'>
						<YearbookSortDropdown />
						<YearbookFilterDropdown />
					</div>
				</form>
				<div className='flex flex-wrap justify-center w-full px-4 bg-transparent md:px-0 lg:mt-20 md:mt-16'>
					{students.map((student: Student) => (
						<div
							key={student.username}
							className='bg-transparent w-6/12 lg:w-4/12 md:w-6/12 md:my-0 my-2'>
							{isMobile ? (
								<Link href={`/characters/${student.username}`}>
									<a>
										<YearbookMobileProfileCard
											username={student.username}
											key={student.username}
											nama={student.nama}
											foto_diri={`${imageUrl}/${student.foto_diri}`}
											jurusan={student.jurusan}
											house_name={student.house_name}
										/>
									</a>
								</Link>
							) : (
								<Link href={`/characters/${student.username}`}>
									<a>
										<YearbookProfileCard
											username={student.username}
											key={student.username}
											nama={student.nama}
											foto_diri={`${imageUrl}/${student.foto_diri}`}
											jurusan={student.jurusan}
											house_name={student.house_name}
										/>
									</a>
								</Link>
							)}
						</div>
					))}
				</div>
				<YearbookPagination />
			</YearbookContainer>
		</>
	)
}

export default CharactersPage
