import React from 'react'
import Card from '../ui/Card'
import style from './GetToKnowUs.module.css'
import Link from 'next/link'

const GetToKnowUs = () => {
	return (
		<div>
			<div className={style.h2}>
				<h2>
					Get to<br></br>Know Us
				</h2>
			</div>
			<div className='flex xl:flex-nowrap flex-wrap space-x-5 justify-center'>
				<Card>
					<Link href='/yearbook'>
						<img
							src='/asset/image/yearbook-icon.svg'
							alt='Yearbook'
							className={style.img}
						/>
					</Link>
					<h3 className='mb-7'>Yearbook</h3>
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
					<h3 className='mb-7'>Quiz</h3>
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
					<h3 className='mb-7'>Our Thoughts</h3>
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
					<h3 className='mb-7'>Our Passions</h3>
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
					<h3 className='mb-7'>Tutor Angkatan</h3>
					<p className={style.p}>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
			</div>
		</div>
	)
}

export default GetToKnowUs
