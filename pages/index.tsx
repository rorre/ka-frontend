import React from 'react'
import GetToKnowUs from '../app/components/landing-page/GetToKnowUs'
import OurStories from '../app/components/landing-page/OurStories'
import MeetTheDevTeam from '../app/components/landing-page/MeetTheDevTeam'
import Header from '../app/components/global/header'
import Messages from '../app/components/landing-page/Messages'

const Home = () => {
	return (
		<>
			<Header />
			<div className='flex flex-col items-center justify-center h-screen text-center text-white cursor-default'>
				<h2>INTRODUCING</h2>
				<h1 className='text-9xl'>
					CSUIO<br></br>2021
				</h1>
			</div>
			<Messages />
			<OurStories />
			<GetToKnowUs />
			<MeetTheDevTeam />
		</>
	)
}

export default Home
