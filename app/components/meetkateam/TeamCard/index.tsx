import React from 'react'
import { GradientImageDiv } from '../../characters/ProfileCard/styles'
import { TeamCardContainer } from './TeamCardContainer'
import TeamInterface from '../TeamMembers/interfaces/Team.interface'
import * as utils from '../../characters/utils/helpers'

export const TeamCard = ({ name, major, image, house }: TeamInterface) => (
	<div className='relative'>
		<TeamCardContainer image={image} />
		<div className='absolute top-1.5 right-1.5'>
			{utils.getHouseIcon(house)}
		</div>
		<GradientImageDiv className='absolute bottom-0 left-0 w-full pt-12 pb-3 px-2'>
			<p className='text-1.5xs text-white font-bold'>
				{utils.shortenName(name)}
			</p>
			<p className='text-2xs text-white font-extralight'>{major}</p>
		</GradientImageDiv>
	</div>
)

export default TeamCard
