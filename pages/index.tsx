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
			<div className='mx-auto max-w-9/10 mb-48 lg:mb-28 flex flex-col items-center justify-center h-screen text-center text-white cursor-default'>
				<h2 className='3sm:text-3xl'>INTRODUCING</h2>
				<h1 className='2sm:text-9xl text-8xl'>
					CSUI<br></br>2021
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
