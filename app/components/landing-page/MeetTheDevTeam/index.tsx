import React from 'react'
import Link from 'next/link'
import style from './MeetTheDevTeam.module.css'
import { DevCard } from '../styles'

const MeetTheDevTeam = () => {
	return (
		<div className='h-screen flex items-center justify-center'>
			<Link href='/devteam'>
				<DevCard className={style.glow}>
					<img
						src='/assets/mtdt-icon.svg'
						alt='Meet the Dev Team'
						className='mb-10'
					/>
					<h2 className='3md:text-3xl 3sm:text-xl 3sm:max-w-3/4 text-center'>
						Meet the Dev Team
					</h2>
				</DevCard>
			</Link>
		</div>
	)
}

export default MeetTheDevTeam
