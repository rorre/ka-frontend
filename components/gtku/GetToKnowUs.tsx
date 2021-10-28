import React from 'react'
// import Card from '../ui/Card'
import style from './GetToKnowUs.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.div`
	background: linear-gradient(
		152.01deg,
		rgba(255, 255, 255, 0.08) 0%,
		rgba(255, 255, 255, 0.21) 98.09%
	);
	backdrop-filter: blur(4px);
	border-radius: 20px;
	padding: 54px 35px;
	height: 400px;
	max-width: 300px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.5s ease-in-out;
	margin-bottom: 20px;
	&:hover {
		transform: scale(1.1);
	}
`

const GetToKnowUs = () => {
	return (
		<div className='h-screen'>
			<h2 className='my-24'>
				Get to<br></br>Know Us
			</h2>
			<div className='flex xl:flex-nowrap flex-wrap space-x-5 justify-center'>
				<Card>
					<Link href='/yearbook'>
						<img
							src='/asset/image/yearbook-icon.svg'
							alt='Yearbook'
							className={style.img}
						/>
					</Link>
					<h3 className='mb-7 text-2xl'>Yearbook</h3>
					<p className={style.p}>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/quiz'>
						<img
							src='/asset/image/quiz-icon.svg'
							alt='Quiz'
							className={style.img}
						/>
					</Link>
					<h3 className='mb-7 text-2xl'>Quiz</h3>
					<p className={style.p}>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/ourthoughts'>
						<img
							src='/asset/image/ourthoughts-icon.svg'
							alt='Our Thoughts'
							className={style.img}
						/>
					</Link>
					<h3 className='mb-7 text-2xl'>Our Thoughts</h3>
					<p className={style.p}>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/ourpassions'>
						<img
							src='/asset/image/ourpassions-icon.svg'
							alt='Our Passions'
							className={style.img}
						/>
					</Link>
					<h3 className='mb-7 text-2xl'>Our Passions</h3>
					<p className={style.p}>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/tutorangkatan'>
						<img
							src='/asset/image/tutorangkatan-icon.svg'
							alt='Tutor Angkatan'
							className={style.img}
						/>
					</Link>
					<h3 className='mb-7 text-2xl'>Tutor Angkatan</h3>
					<p className={style.p}>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
			</div>
		</div>
	)
}

export default GetToKnowUs
