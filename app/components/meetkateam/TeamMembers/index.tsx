import React from 'react'
import TeamCard from '../TeamCard'
import TeamInterface from './interfaces/Team.interface'
import { team } from './utils/team'

const TeamMembers = () => {
	return (
		<div className='flex flex-wrap justify-center'>
			{team.map((member: TeamInterface) => (
				<div
					key={member.id}
					className='bg-transparent w-32 2sm:w-40 2md:w-56 my-5 md:mx-8 mx-3'>
					<TeamCard key={member.id} {...member} />
				</div>
			))}
		</div>
	)
}

export default TeamMembers
