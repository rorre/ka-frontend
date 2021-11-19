import React from 'react'
import TeamMembers from '../../app/components/meetkateam/TeamMembers'

const MeetKaTeam = () => {
	return (
		<>
			<section className='flex flex-col items-center justify-center mx-auto max-w-9/10'>
				<div className='lg:my-56 my-44'>
					<div className='mb-24 text-center text-white'>
						<h1 className='3md:text-5xl'>Meet Karya Angkatan Team</h1>
						<h5 className='max-w-2xl mx-auto mt-5 3md:text-lg'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</h5>
					</div>
					<TeamMembers />
				</div>
			</section>
			<div className='absolute top-0 w-full bg-no-repeat bg-contain lg:bg-cover h-gigantic bg-shade-pattern-sm lg:bg-shade-pattern -z-10'></div>
		</>
	)
}

export default MeetKaTeam
