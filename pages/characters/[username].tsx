import React, { ReactElement, useEffect, useState } from 'react'
import Header from '../../app/components/global/header'
import axios from 'axios'
import { CharacterDetailsLayout } from '../../app/components/characters/character-details'
import * as Buttons from '../../app/components/characters/character-details/buttons'
import * as utils from '../../app/components/characters/utils/helpers'
import { useRouter } from 'next/router'
import { DetailedStudent } from '../../app/components/characters/character-details/interfaces'

const CharactersDetailsPage = () => {
	const [student, setStudent] = useState({} as DetailedStudent)
	const router = useRouter()
	const { username } = router.query

	const url = process.env.NEXT_PUBLIC_BASE_URL + `/student/${username}`

	const getStudent = async () => {
		try {
			const { data } = await axios.get(url)
			setStudent(data as DetailedStudent)
		} catch (error) {
			return {}
		}
	}

	useEffect(() => {
		getStudent()
	}, [student, username])

	return (
		<>
			<Header />
			<div className='relative'>
				<Buttons.Back className='absolute top-2 left-2 rounded-md' />
				<div className='absolute top-2 right-2'>
					{utils.getHouseIcon(
						student.house?.nama.split(' ').at(2)!,
						'w-12 h-12'
					)}
				</div>
			</div>
		</>
	)
}

export default CharactersDetailsPage

CharactersDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return <CharacterDetailsLayout>{page}</CharacterDetailsLayout>
}
