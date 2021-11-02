import React from 'react'
import {
	YearbookSearchBar,
	YearbookContainer,
	YearbookNavbar,
	YearbookProfileCard,
	YearbookFilterDropdown,
	YearbookSortDropdown,
	YearbookPagination,
} from '../../app/components/yearbook'
import { students } from '../../app/utils/students'
import { Student } from '../../app/components/yearbook/ts/interfaces'
import styled from 'styled-components'

const GradientBackgroundRed = styled.div`
	position: fixed;
	top: 12rem;
	right: 0;
	width: 20%;
	height: 60vh;
	background: linear-gradient(162.58deg, #ab1818 0.93%, #e03838 109.38%);
	box-shadow: 10px 10px 10px rgba(242, 60, 60, 0.25);
	filter: blur(150px);
	transform: rotate(166.08deg);
`

const GradientBackgroundBlue = styled.div`
	position: fixed;
	top: 12rem;
	left: 0;
	width: 20%;
	height: 60vh;
	background: linear-gradient(316.49deg, #3958ce -17.19%, #164f85 103.21%);
	box-shadow: 10px 10px 10px rgba(242, 60, 60, 0.25);
	filter: blur(150px);
	transform: rotate(166.08deg);
`

const CharactersPage = () => {
	return (
		<div>
			<GradientBackgroundBlue />
			<GradientBackgroundRed />
			<YearbookNavbar />
			<YearbookContainer>
				<h1 className='flex justify-center mt-16 text-4xl font-bold text-center text-white bg-transparent md:text-6xl'>
					Our Characters
				</h1>
				<p className='flex justify-center mt-8 mb-20 text-center text-white bg-transparent'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc,
					leo eros, tellus sit eget auctor.
				</p>
				<form
					className='z-10 bg-transparent'
					action='submit'
					method='POST'
					onSubmit={event => event.preventDefault()}>
					<YearbookSearchBar />
					<div className='z-10 flex flex-col justify-center mx-auto mb-8 space-y-5 bg-transparent md:flex-row md:space-x-20 md:space-y-0 mt-14'>
						<YearbookSortDropdown />
						<YearbookFilterDropdown />
					</div>
				</form>
			</YearbookContainer>
			<div className='container flex flex-wrap justify-center w-full px-4 mx-auto bg-transparent md:px-0 md:mt-20'>
				{students.map((student: Student) => (
					<div
						key={student.id}
						className='w-full bg-transparent lg:w-3/12 md:w-4/12 sm:w-6/12'>
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
			<YearbookContainer>
				<YearbookPagination />
			</YearbookContainer>
			<hr className='my-10 border-t-2 border-dark-2' />
			<div className='my-48 bg-dark-2'></div>
		</div>
	)
}

export default CharactersPage
