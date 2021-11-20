import React from 'react'
import { GradientImageDiv } from '../../characters/ProfileCard/styles'
import { TeamCardContainer } from './TeamCardContainer'
import * as utils from '../../characters/utils/helpers'
import TeamInterface from '../TeamMembers/interfaces/Team.interface'

const TeamCardContent = ({ name, role, image, house }: TeamInterface) => {
	return (
		<div className='transition transform duration-500 hover:scale-110 relative m-0.5 w-44 h-44 lg:w-52 lg:h-52'>
			<TeamCardContainer image={image} />
			{house ? (
				<div className='absolute top-1.5 right-1.5'>
					{utils.getHouseIcon(house)}
				</div>
			) : (
				''
			)}
			<GradientImageDiv className='absolute bottom-0 left-0 w-full px-5 pt-12 pb-5'>
				<p className='text-1.5xs lg:text-sm text-white font-bold'>
					{utils.shortenName(name)}
				</p>
				<p className='text-1.5xs lg:text-sm text-white font-extralight'>
					{role}
				</p>
			</GradientImageDiv>
		</div>
	)
}

export default TeamCardContent
