import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const SeeMore = styled.h6`
	background: linear-gradient(112.71deg, #ab1818 17.21%, #520000 91.53%);
	border-radius: 31.7143px;
	padding: 10px 90px;
	bottom: 0px;
	cursor: pointer;
`

const Story = styled.div`
	background: white;
	width: 320px;
	height: 450px;
	display: flex;
	color: black;
	text-align: center;
	align-items: center;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
		margin: 0 20px;
	}
`

const OurStories = () => {
	return (
		<div className='h-screen'>
			<h2 className='my-24'>Our Stories</h2>
			<div className='grid grid-cols-8'>
				<div className='col-span-3 flex flex-col items-center'>
					<p className='max-w-xs h-full flex items-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
						nulla facilisi nullam vehicula ipsum a arcu.{' '}
					</p>
					<Link href='/ourstories'>
						<SeeMore>See More</SeeMore>
					</Link>
				</div>
				<div className='col-start-4 col-end-9 gap-5 flex'>
					<Link href='/ourstories1'>
						<Story>
							<h3 className='w-full'>TITLE</h3>
						</Story>
					</Link>
					<Link href='/ourstories2'>
						<Story>
							<h3 className='w-full'>TITLE</h3>
						</Story>
					</Link>
					<Link href='/ourstories3'>
						<Story>
							<h3 className='w-full'>TITLE</h3>
						</Story>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default OurStories
