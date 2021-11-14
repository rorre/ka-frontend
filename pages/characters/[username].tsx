import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { CharacterDetailsLayout } from '../../app/components/characters/character-details'
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

	return <div className='text-white'>{student.nama}</div>
}

export default CharactersDetailsPage

CharactersDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return <CharacterDetailsLayout>{page}</CharacterDetailsLayout>
}
