import React from 'react'
import Link from 'next/link'
import style from './MeetKaryaAngkatanTeam.module.css'
import { DevCard } from '../styles'
import Image from 'next/image'
import { useResponsive } from '../../../hooks'

const MeetTheDevTeam = () => {
	const { isMobile } = useResponsive()
	return (
		<section className='h-screen flex items-center justify-center text-white mx-auto max-w-9/10'>
			<Link href='/meetkateam'>
				<DevCard className={style.glow}>
					<div className='mb-10 3sm:w-1/3'>
						<Image
							src='/assets/mtdt-icon.svg'
							alt='Meet Karya Angkatan Team'
							width={150}
							height={105}
						/>
					</div>
					<h2 className='3md:text-3xl 3sm:text-lg 3sm:max-w-3/4 text-center'>
						{isMobile ? 'Meet KA Team' : 'Meet Karya Angkatan Team'}
					</h2>
				</DevCard>
			</Link>
		</section>
	)
}

export default MeetTheDevTeam
