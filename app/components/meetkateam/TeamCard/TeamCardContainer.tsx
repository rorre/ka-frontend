import React from 'react'
import {
	ProfilePicture,
	ProfileImageBorder,
} from '../../characters/ProfileCard/styles'
import { ProfilePictureContainerInterface } from '../../characters/ProfileCard/interfaces/ProfilePictureContainer.interface'

export const TeamCardContainer = ({
	image,
}: ProfilePictureContainerInterface) => (
	<ProfileImageBorder className='rounded-md'>
		<ProfilePicture
			className='h-full object-cover'
			src={image}
			alt='Profile-Image'
		/>
	</ProfileImageBorder>
)
