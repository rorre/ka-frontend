import React, { ReactElement, useEffect, useState } from 'react'
import Header from '../../app/components/global/header'
import axios from 'axios'
import {
	CharacterDetailsLayout,
	ClapperBackground,
	BioSection,
	MobileBioSection,
	Interest,
	VideoModal,
} from '../../app/components/characters'
import * as Buttons from '../../app/components/characters/character-details/buttons'
import * as utils from '../../app/components/characters/utils/helpers'
import { useRouter } from 'next/router'
import { DetailedStudent } from '../../app/components/characters/character-details/interfaces'
import { useResponsive } from '../../app/hooks'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const CharactersDetailsPage = () => {
	const [showVideo, setShowVideo] = useState(false)
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
		video_diri: '',
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

	console.log(student)

	return (
		<>
			<Header />
			<div className='relative'>
				<VideoModal
					showVideo={showVideo}
					setShowVideo={setShowVideo}
					jurusan={student.jurusan}
					nama={student.nama}
					video_diri={student.video_diri as string}
					className={showVideo ? '' : 'hidden'}
					foto_diri={`${imageUrl}/${student.foto_diri}`}
				/>

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

				{isMobile ? (
					<MobileBioSection
						student={student}
						showVideo={showVideo}
						setShowVideo={setShowVideo}
					/>
				) : (
					<BioSection
						student={student}
						showVideo={showVideo}
						setShowVideo={setShowVideo}
					/>
				)}
				<div className='lg:mx-48 lg:mt-20 md:mx-20 md:mt-20 mt-10 mx-8'>
					<h2 className='md:text-2xl text-lg text-white font-bold mb-3'>
						About Me
					</h2>
					<ReactMarkdown
						className='md:text-lg text-sm text-white'
						remarkPlugins={[remarkGfm]}>
						{student.about as string}
					</ReactMarkdown>
				</div>
				<div className='lg:mx-48 md:mx-20 mt-10 mx-8'>
					<h2 className='md:text-2xl text-lg text-white font-bold mb-3'>
						Future Message
					</h2>
					<ReactMarkdown
						className='md:text-lg text-sm text-white'
						remarkPlugins={[remarkGfm]}>
						{student.message as string}
					</ReactMarkdown>
				</div>
				<div className='lg:mx-48 md:mx-20 mt-10 mx-8'>
					<h2 className='md:text-2xl text-lg text-white font-bold mb-3'>
						IT Interests
					</h2>
					<div className=' -mx-1 flex flex-row flex-wrap'>
						{student.interests?.map((interest, index) => (
							<Interest key={interest} interest={interest} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default CharactersDetailsPage

CharactersDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return <CharacterDetailsLayout>{page}</CharacterDetailsLayout>
}
