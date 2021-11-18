import React, { ReactElement, useEffect, useState } from 'react'
import Header from '../../app/components/global/header'
import axios from 'axios'
import {
	CharacterDetailsLayout,
	ClapperBackground,
	BioSection,
} from '../../app/components/characters'
import * as Buttons from '../../app/components/characters/character-details/buttons'
import * as utils from '../../app/components/characters/utils/helpers'
import { useRouter } from 'next/router'
import { DetailedStudent } from '../../app/components/characters/character-details/interfaces'

const CharactersDetailsPage = () => {
	const [student, setStudent] = useState({
		username: '',
		nama: '',
		jurusan: '',
		ttl: '',
		hobi: '',
		twitter: '',
		line: '',
		instagram: '',
		foto_diri: '',
		video_diri: null,
		house: { id: 0, codename: '', nama: '' },
		house_led: null,
		message: '',
		about: '',
		interests: [] as string[],
	} as DetailedStudent)
	const router = useRouter()
	const { username } = router.query

	const url = process.env.NEXT_PUBLIC_BASE_URL + `/student/${username}`
	const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + `/assets/student`

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
	}, [username])

	console.log(student)

	return (
		<>
			<Header />
			<div className='relative'>
				<ClapperBackground />
				<Buttons.Back className='absolute top-2 left-2 rounded-md' />
				<div className='absolute top-1 right-0'>
					{student.house?.nama === ''
						? ''
						: utils.getHouseIcon(
								student.house?.nama.split(' ').at(2)!,
								'md:w-12 md:h-12 w-10 h-10'
						  )}
				</div>
				<BioSection
					foto_diri={`${imageUrl}/${student.foto_diri}`}
					nama={student.nama}
					jurusan={student.jurusan}
					ttl={student.ttl}
					hobi={student.hobi}
					line={student.line}
					instagram={student.instagram}
				/>
				<div className='lg:mx-48 lg:my-20 md:mx-20 md:my-20'>
					<h2 className='lg:text-3xl md:text-2xl text-white font-bold'>
						About Me
					</h2>
					<br />
					<p className='lg:text-base md:text-md text-white'>{student.about}</p>
				</div>
			</div>
		</>
	)
}

export default CharactersDetailsPage

CharactersDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return <CharacterDetailsLayout>{page}</CharacterDetailsLayout>
}
