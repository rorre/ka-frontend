import React from 'react'
import GetToKnowUs from '../app/components/landing-page/GetToKnowUs'
import OurStories from '../app/components/landing-page/OurStories'
import MeetTheDevTeam from '../app/components/landing-page/MeetTheDevTeam'
import Messages from '../app/components/landing-page/Messages'
import Hero from '../app/components/landing-page/Hero'

const Home = () => {
	return (
		<>
			<Hero />
			<Messages />
			<OurStories />
			<GetToKnowUs />
			<MeetTheDevTeam />
		</>
	)
}

export default Home
