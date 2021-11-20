import React from 'react'
import { v4 as uuid } from 'uuid'
import TeamCard from '../../app/components/meetkateam/TeamCard'
import TeamMembers from '../../app/components/meetkateam/TeamMembers'
import TeamInterface from '../../app/components/meetkateam/TeamMembers/interfaces/Team.interface'
import { honorableMentions } from '../../app/components/meetkateam/utils/honorableMentions'

const MeetKaTeam = () => {
	return (
		<>
			<section className='flex flex-col items-center justify-center mx-auto max-w-9/10'>
				<div className='lg:my-56 my-44'>
					<div className='mb-24 text-center text-white'>
						<h1 className='3md:text-5xl'>Meet Karya Angkatan Team</h1>
						<h5 className='max-w-2xl mx-auto mt-5 3md:text-lg'>
							Meet the team behind Karya Angkatan
						</h5>
					</div>
					<TeamMembers />
				</div>
			</section>
			<section className='flex flex-col items-center justify-center mx-auto max-w-9/10'>
				<div className='lg:my-56 my-44'>
					<div className='mb-24 text-center text-white'>
						<h1 className='3md:text-5xl'>Honorable Mention</h1>
						<h5 className='max-w-2xl mx-auto mt-5 3md:text-lg'>
							Thanks to this holy bot that came down from heaven
						</h5>
					</div>
					<div className='flex flex-wrap justify-center max-w-6xl'>
						{honorableMentions.map((honorableMention: TeamInterface) => (
							<div
								key={uuid()}
								className='w-32 mx-5 my-5 bg-transparent 2sm:w-40 2md:w-56 lg:mx-8'>
								<TeamCard {...honorableMention} />
							</div>
						))}
					</div>
				</div>
			</section>
			<div className='absolute top-0 w-full bg-no-repeat bg-contain lg:bg-cover h-gigantic bg-shade-pattern-sm lg:bg-shade-pattern -z-10'></div>
		</>
	)
}

export default MeetKaTeam
