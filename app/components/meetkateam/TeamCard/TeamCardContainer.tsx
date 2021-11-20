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
			className='object-cover h-44 lg:h-56 '
			src={image}
			alt='Profile-Image'
		/>
	</ProfileImageBorder>
)
