import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import {
	CharacterDetailsLayout,
	ClapperBackground,
	BioSection,
	MobileBioSection,
	Interest,
} from '../../app/components/characters'
import * as Buttons from '../../app/components/characters/character-details/buttons'
import * as utils from '../../app/components/characters/utils/helpers'
import { useRouter } from 'next/router'
import { DetailedStudent } from '../../app/components/characters/character-details/interfaces'
import { useResponsive } from '../../app/hooks'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
	const { isMobile } = useResponsive()

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

	return (
		<>
			<ClapperBackground />
			<Buttons.Back className='absolute rounded-md top-10 left-10' />
			<div className='absolute right-10 top-10'>
				{student.house?.nama === ''
					? ''
					: utils.getHouseIcon(
							student.house?.nama.split(' ').at(2)!,
							'md:w-20 md:h-20 w-16 h-16'
					  )}
			</div>

			{isMobile ? (
				<MobileBioSection
					foto_diri={`${imageUrl}/${student.foto_diri}`}
					nama={student.nama}
					jurusan={student.jurusan}
					ttl={student.ttl}
					hobi={student.hobi}
					line={student.line}
					instagram={student.instagram}
				/>
			) : (
				<BioSection
					foto_diri={`${imageUrl}/${student.foto_diri}`}
					nama={student.nama}
					jurusan={student.jurusan}
					ttl={student.ttl}
					hobi={student.hobi}
					line={student.line}
					instagram={student.instagram}
				/>
			)}
			<section className='flex flex-col justify-center gap-16 py-16 '>
				<div className='mx-8 lg:mx-48 md:mx-20'>
					<h2 className='mb-3 text-lg font-bold text-white md:text-2xl'>
						About Me
					</h2>
					<ReactMarkdown
						className='text-sm text-white md:text-lg'
						remarkPlugins={[remarkGfm]}>
						{student.about as string}
					</ReactMarkdown>
				</div>
				<div className='mx-8 lg:mx-48 md:mx-20'>
					<h2 className='mb-3 text-lg font-bold text-white md:text-2xl'>
						Future Message
					</h2>
					<ReactMarkdown
						className='text-sm text-white md:text-lg'
						remarkPlugins={[remarkGfm]}>
						{student.message as string}
					</ReactMarkdown>
				</div>
				<div className='mx-8 lg:mx-48 md:mx-20'>
					<h2 className='mb-3 text-lg font-bold text-white md:text-2xl'>
						IT Interests
					</h2>
					<div className='flex flex-row flex-wrap -mx-1 '>
						{student.interests?.map((interest, index) => (
							<Interest key={interest} interest={interest} />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default CharactersDetailsPage

CharactersDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return <CharacterDetailsLayout>{page}</CharacterDetailsLayout>
}
