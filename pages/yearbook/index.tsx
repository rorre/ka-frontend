import React from 'react'
import {
	YearbookSearchBar,
	YearbookContainer,
	YearbookNavbar,
	YearbookProfileCard,
	YearbookFilterDropdown,
	YearbookSortDropdown,
} from '../../components/yearbook'
import { students } from '../../utils/students'
import { Student } from '../../components/yearbook/ts/interfaces'
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
				<h1 className='flex justify-center mt-16 md:text-6xl text-4xl text-center font-bold text-white bg-transparent'>
					Our Characters
				</h1>
				<p className='flex justify-center mb-20 mt-8 text-white text-center bg-transparent'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc,
					leo eros, tellus sit eget auctor.
				</p>
				<form
					className='bg-transparent z-10'
					action='submit'
					method='POST'
					onSubmit={event => event.preventDefault()}>
					<YearbookSearchBar />
					<div className='z-10 bg-transparent flex flex-col md:flex-row justify-center md:space-x-20 md:space-y-0 space-y-5 mx-auto mb-8 mt-14'>
						<YearbookSortDropdown />
						<YearbookFilterDropdown />
					</div>
				</form>
			</YearbookContainer>
			<div className='flex flex-wrap justify-center mx-auto container md:px-0 px-4 md:mt-20 bg-transparent w-full'>
				{students.map((student: Student) => (
					<div
						key={student.id}
						className='lg:w-3/12 md:w-4/12 sm:w-6/12 w-full bg-transparent'>
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
