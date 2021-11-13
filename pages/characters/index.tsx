import React, { useEffect, useState } from 'react'
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

const getStudents = async (query?: string) => {
	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_BASE_URL}/student/list?${query}`
		)

		return res.data as Student[]
	} catch (error) {
		return []
	}
}

const CharactersPage = () => {
	const [students, setStudents] = useState([] as Student[])
	const { isMobile } = useResponsive()

	useEffect(() => {
		getStudents().then(studentsData => setStudents(studentsData))
	}, [])

	return (
		<YearbookContainer>
			<h1 className='flex justify-center mt-24 md:mt-20 text-3xl font-bold text-center text-white md:text-6xl'>
				Our Characters
			</h1>
			<p className='flex justify-center md:mt-8 mt-4 mb-20 text-center text-white bg-transparent md:text-base text-xs'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc,
				leo eros, tellus sit eget auctor.
			</p>
			<form
				className='z-10 md:mx-8 lg:mx-20'
				action='submit'
				method='POST'
				onSubmit={event => event.preventDefault()}>
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
						className='bg-transparent w-4/12 md:my-0 my-2'>
						{isMobile ? (
							<YearbookMobileProfileCard
								is_2021={student.is_2021}
								username={student.username}
								key={student.username}
								nama={student.nama}
								foto_diri={
									// Placeholder image. Nanti kalau udah ada fotonya bakal diganti
									'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg'
								}
								jurusan={student.jurusan}
								house_name={student.house_name}
							/>
						) : (
							<YearbookProfileCard
								is_2021={student.is_2021}
								username={student.username}
								key={student.username}
								nama={student.nama}
								foto_diri={
									'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg'
								}
								jurusan={student.jurusan}
								house_name={student.house_name}
							/>
						)}
					</div>
				))}
			</div>
			<YearbookPagination />
		</YearbookContainer>
	)
}

export default CharactersPage
