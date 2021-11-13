import React from 'react'
import Link from 'next/link'
import { Card, Image } from '../styles'

const GetToKnowUs = () => {
	return (
		<section className='h-full text-white'>
			<h2 className='my-24 text-center 2sm:text-left'>
				Get to<br></br>Know Us
			</h2>
			<div className='flex xl:flex-nowrap flex-wrap space-x-5 justify-center'>
				<Card className='ml-5'>
					<Link href='/yearbook'>
						<Image src='/assets/yearbook-icon.svg' alt='Yearbook' />
					</Link>
					<h3 className='mb-7 text-2xl'>Yearbook</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/quiz'>
						<Image src='/assets/quiz-icon.svg' alt='Quiz' />
					</Link>
					<h3 className='mb-7 text-2xl'>Quiz</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/ourthoughts'>
						<Image src='/assets/ourthoughts-icon.svg' alt='Our Thoughts' />
					</Link>
					<h3 className='mb-7 text-2xl'>Our Thoughts</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/ourpassions'>
						<Image src='/assets/ourpassions-icon.svg' alt='Our Passions' />
					</Link>
					<h3 className='mb-7 text-2xl'>Our Passions</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/tutorangkatan'>
						<Image src='/assets/tutorangkatan-icon.svg' alt='Tutor Angkatan' />
					</Link>
					<h3 className='mb-7 text-2xl'>Tutor Angkatan</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
			</div>
		</section>
	)
}

export default GetToKnowUs
