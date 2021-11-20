import React from 'react'
import { GradientImageDiv } from '../../characters/ProfileCard/styles'
import { TeamCardContainer } from './TeamCardContainer'
import TeamInterface from '../TeamMembers/interfaces/Team.interface'
import * as utils from '../../characters/utils/helpers'

export const TeamCard = ({ name, role, image, house }: TeamInterface) => (
	<div className='transition transform duration-500 hover:scale-110 relative m-0.5 w-36 h-36 2sm:w-44 2sm:h-44 lg:w-52 lg:h-52'>
		<TeamCardContainer image={image} />
		<div className='absolute top-1.5 right-1.5'>
			{utils.getHouseIcon(house)}
		</div>
		<GradientImageDiv className='absolute bottom-0 left-0 w-full pt-12 pb-5 px-5'>
			<p className='text-2xs 2sm:text-1.5xs lg:text-sm text-white font-bold'>
				{utils.shortenName(name)}
			</p>
			<p className='text-2xs 2sm:text-1.5xs lg:text-sm text-white font-extralight'>
				{role}
			</p>
		</GradientImageDiv>
	</div>
)

export default TeamCard
