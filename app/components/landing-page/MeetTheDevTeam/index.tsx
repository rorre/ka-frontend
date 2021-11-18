import React from 'react'
import Link from 'next/link'
import style from './MeetTheDevTeam.module.css'
import { DevCard } from '../styles'
import Image from 'next/image'

const MeetTheDevTeam = () => {
	return (
		<section className='h-screen flex items-center justify-center text-white mx-auto max-w-9/10'>
			<Link href='/meetkateam'>
				<DevCard className={style.glow}>
					<div className='mb-10 3sm:w-1/3'>
						<Image
							src='/assets/mtdt-icon.svg'
							alt='Meet the Dev Team'
							width={150}
							height={105}
						/>
					</div>
					<h2 className='3md:text-3xl 3sm:text-xl 3sm:max-w-3/4 text-center'>
						Meet the Dev Team
					</h2>
				</DevCard>
			</Link>
		</section>
	)
}

export default MeetTheDevTeam
