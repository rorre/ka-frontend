import React from 'react'
import { GradientImageDiv } from './styles'
import { ProfilePictureContainer } from './ProfilePictureContainer'
import Student from '../interfaces/Student'
import * as utils from '../utils/helpers'

export const MobileProfileCard = ({ name, major, image, house }: Student) => (
	<div className='relative'>
		<ProfilePictureContainer image={image} />
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

export default MobileProfileCard
