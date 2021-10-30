import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import style from './MeetTheDevTeam.module.css'

const DevCard = styled.div`
	position: absolute;
	width: 927px;
	height: 374px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: #1d1a27;
	border-radius: 20px;
	@media (max-width: 1000px) {
		width: 70%;
	}
`

const MeetTheDevTeam = () => {
	return (
		<div className='h-screen flex items-center justify-center'>
			<Link href='/devteam'>
				<DevCard className={style.glow}>
					<img
						src='/asset/image/mtdt-icon.svg'
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
