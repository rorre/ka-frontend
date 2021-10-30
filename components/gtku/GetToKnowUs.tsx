import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Image = styled.img`
	background: linear-gradient(316.49deg, #04091c -17.19%, #164f85 103.21%);
	border-radius: 500px;
	max-width: 121.22px;
	margin-bottom: 20px;
	cursor: pointer;
`

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
			<h2 className='my-24 text-center 2sm:text-left'>
				Get to<br></br>Know Us
			</h2>
			<div className='flex xl:flex-nowrap flex-wrap space-x-5 justify-center'>
				<Card className='ml-5'>
					<Link href='/yearbook'>
						<Image src='/asset/image/yearbook-icon.svg' alt='Yearbook' />
					</Link>
					<h3 className='mb-7 text-2xl'>Yearbook</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/quiz'>
						<Image src='/asset/image/quiz-icon.svg' alt='Quiz' />
					</Link>
					<h3 className='mb-7 text-2xl'>Quiz</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/ourthoughts'>
						<Image src='/asset/image/ourthoughts-icon.svg' alt='Our Thoughts' />
					</Link>
					<h3 className='mb-7 text-2xl'>Our Thoughts</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/ourpassions'>
						<Image src='/asset/image/ourpassions-icon.svg' alt='Our Passions' />
					</Link>
					<h3 className='mb-7 text-2xl'>Our Passions</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
				<Card>
					<Link href='/tutorangkatan'>
						<Image
							src='/asset/image/tutorangkatan-icon.svg'
							alt='Tutor Angkatan'
						/>
					</Link>
					<h3 className='mb-7 text-2xl'>Tutor Angkatan</h3>
					<p className='text-md'>Lorem ipsum dolor sit amet, consectetur </p>
				</Card>
			</div>
		</div>
	)
}

export default GetToKnowUs
