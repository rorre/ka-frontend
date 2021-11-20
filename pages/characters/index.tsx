import React, { useEffect } from 'react'
import Link from 'next/link'
import {
	YearbookSearchBar,
	YearbookProfileCard,
	YearbookMobileProfileCard,
	YearbookFilterDropdown,
	YearbookSortDropdown,
	YearbookPagination,
	// YearbookContainer,
	YearbookLoader,
} from '../../app/components/characters'
import { useFilter } from '../../app/components/characters/hooks/useFilter'
import { useResponsive } from '../../app/hooks'
import { Student } from '../../app/components/characters/interfaces'

const CharactersPage = () => {
	const {
		setCurrentPage,
		handleSubmit,
		getStudents,
		currentPage,
		isLoading,
		students,
		maxPage,
		query,
	} = useFilter()

	// 22 as default because in total there are 22 pages with no filter
	const { isMobile } = useResponsive()
	const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + `/assets/student`

	useEffect(() => {
		getStudents()
	}, [query, currentPage])

	return (
		<>
			<section className='flex flex-col items-center justify-center w-full h-screen px-5'>
				<h1 className='flex justify-center mt-24 text-3xl font-bold text-center text-white md:mt-20 md:text-6xl'>
					Our Characters
				</h1>
				<p className='flex justify-center mt-4 mb-20 text-xs text-center text-white bg-transparent md:mt-8 md:text-base'>
					Come and find out more about the members of CSUI201
				</p>
				<form
					id='characters'
					name='yearbookForm'
					className='z-10 w-full lg:w-3/4 md:mx-8 lg:mx-20'
					action=''
					onSubmit={handleSubmit}>
					<YearbookSearchBar />
					<div className='z-10 flex justify-center mb-8 space-x-2.5 bg-transparent md:flex-row md:space-x-5 md:space-y-0 lg:mt-14 md:mt-10 mt-6'>
						<YearbookSortDropdown />
						<YearbookFilterDropdown />
					</div>
				</form>
			</section>
			<section className='lg:px-32 md:px-8'>
				{isLoading ? (
					<YearbookLoader />
				) : (
					<div className='flex flex-wrap justify-center w-full px-4 bg-transparent md:px-0 lg:mt-20 md:mt-16'>
						{students.map((student: Student) => (
							<div
								key={student.username}
								className='w-6/12 my-2 bg-transparent lg:w-4/12 md:w-6/12 md:my-0'>
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
												line={student.line}
												instagram={student.instagram}
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
												line={student.line}
												instagram={student.instagram}
											/>
										</a>
									</Link>
								)}
							</div>
						))}
					</div>
				)}
				<div className='px-5 pb-32'>
					<YearbookPagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						maxPage={maxPage}
					/>
				</div>
			</section>

			<div className='absolute top-0 w-full bg-no-repeat bg-contain lg:bg-cover h-gigantic bg-shade-pattern-sm lg:bg-shade-pattern -z-10'></div>
		</>
	)
}

export default CharactersPage
