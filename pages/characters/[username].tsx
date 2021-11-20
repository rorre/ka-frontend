import React, { ReactElement, useEffect, useState } from 'react'
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
import Head from 'next/head'

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

	useEffect(() => {
		if (showVideo) {
			document.body.style.position = 'fixed'
			document.body.style.top = `-${document.documentElement.scrollTop}px`
			document.body.style.overflow = 'hidden'
		} else {
			const scrollEnd = document.body.style.position
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.overflow = ''
			window.scrollTo(0, parseInt(scrollEnd || '0') * -1)
		}
	}, [showVideo])

	return (
		<>
			<Head>
				<title>CSUI 2021 | {student.nama}</title>
			</Head>
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
			<Buttons.Back className='absolute rounded-md top-4 md:top-10 left-4 md:left-10' />
			<div className='absolute right-2 md:right-10 top-2 md:top-5'>
				{student.house?.nama === ''
					? ''
					: utils.getHouseIcon(
							student.house?.nama.split(' ').at(2)!,
							'md:w-20 md:h-20 w-12 h-12'
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

			<section className='flex flex-col justify-center gap-16 py-16 '>
				<div className='lg:mx-48 md:mx-20 mx-8'>
					<h2 className='md:text-2xl text-lg text-white font-bold mb-3'>
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
					<div className=' -mx-1 flex flex-row flex-wrap md:mb-0 mb-10'>
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
