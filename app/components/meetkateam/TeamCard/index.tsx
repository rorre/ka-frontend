import React from 'react'
import Link from 'next/link'
import TeamInterface from '../TeamMembers/interfaces/Team.interface'
import TeamCardContent from './TeamCardContent'

const TeamCard = (props: TeamInterface) => {
	return (
		<>
			{props.url.includes('http') ? (
				<a href={props.url}>
					<TeamCardContent {...props} />
				</a>
			) : (
				<Link href={props.url} passHref>
					<a>
						<TeamCardContent {...props} />
					</a>
				</Link>
			)}
		</>
	)
}

export default TeamCard
