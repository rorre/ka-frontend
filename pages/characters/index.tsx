import React from 'react'
import {
	YearbookSearchBar,
	YearbookProfileCard,
	YearbookFilterDropdown,
	YearbookSortDropdown,
	YearbookPagination,
	YearbookContainer,
} from '../../app/components/characters'
import { students } from '../../app/components/characters/utils/students'
import { Student } from '../../app/components/characters/ts/interfaces'

const CharactersPage = () => {
	return (
		<YearbookContainer>
			<h1 className='flex justify-center mt-24 md:mt-20 text-4xl font-bold text-center text-white md:text-6xl'>
				Our Characters
			</h1>
			<p className='flex justify-center mt-8 mb-20 text-center text-white bg-transparent'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc,
				leo eros, tellus sit eget auctor.
			</p>
			<form
				className='z-10 md:mx-8 lg:mx-20'
				action='submit'
				method='POST'
				onSubmit={event => event.preventDefault()}>
				<YearbookSearchBar />
				<div className='z-10 flex flex-col justify-center mb-8 space-y-5 bg-transparent md:flex-row md:space-x-5 md:space-y-0 mt-14'>
					<YearbookSortDropdown />
					<YearbookFilterDropdown />
				</div>
			</form>
			<div className='flex flex-wrap justify-center w-full px-4 bg-transparent md:px-0 md:mt-20'>
				{students.map((student: Student) => (
					<div
						key={student.id}
						className='bg-transparent lg:w-3/12 w-4/12 md:my-0 my-2'>
						<YearbookProfileCard
							key={student.id}
							name={student.name}
							image={student.image}
							major={student.major}
							house={student.house}
						/>
					</div>
				))}
			</div>
			<YearbookPagination />
		</YearbookContainer>
	)
}

export default CharactersPage
