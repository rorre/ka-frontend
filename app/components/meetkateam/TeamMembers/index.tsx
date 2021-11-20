import React from 'react'
import { v4 as uuid } from 'uuid'
import TeamCard from '../TeamCard'
import TeamInterface from './interfaces/Team.interface'
import { team } from './utils/team'

const TeamMembers = () => {
	return (
		<div className='flex flex-wrap justify-center max-w-6xl'>
			{team.map((member: TeamInterface) => (
				<div
					key={uuid()}
					className='w-36 mx-1 2sm:mx-5 my-5 bg-transparent 2sm:w-40 2md:w-56 lg:mx-8'>
					<TeamCard {...member} />
				</div>
			))}
		</div>
	)
}

export default TeamMembers
