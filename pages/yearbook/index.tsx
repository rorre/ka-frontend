import React from 'react'
import {
	YearbookSearchBar,
	YearbookContainer,
	YearbookNavbar,
	YearbookProfileCard,
} from '../../components/yearbook'
import { students } from '../../utils/students'
import { Student } from '../../components/yearbook/ts/interfaces'

const CharactersPage = () => {
	return (
		<div>
			<YearbookNavbar />
			<YearbookContainer>
				<h1 className='flex justify-center mt-16 lg:text-6xl md:text-6xl sm:text-4xl text-center font-bold text-white'>
					Our Characters
				</h1>
				<p className='flex justify-center mb-20 mt-8 text-white text-center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc,
					leo eros, tellus sit eget auctor.
				</p>
				<YearbookSearchBar />
			</YearbookContainer>
			<div className='flex flex-wrap justify-center mx-auto container md:px-0 px-4 mt-16 w-full'>
				{students.map((student: Student) => (
					<div
						key={student.id}
						className='lg:w-3/12 md:w-4/12 sm:w-6/12 w-full'>
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
		</div>
	)
}

export default CharactersPage
