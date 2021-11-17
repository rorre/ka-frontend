import React from 'react'
import { ProfilePicture, ProfileImageBorder } from './styles'
import { ProfilePictureContainerInterface } from './interfaces/ProfilePictureContainer.interface'

export const ProfilePictureContainer = ({
	image,
}: ProfilePictureContainerInterface) => (
	<ProfileImageBorder className='rounded-md md:w-6/12 md:mr-2.5 h-44 md:h-auto'>
		<ProfilePicture className='h-full' src={image} alt='Profile-Image' />
	</ProfileImageBorder>
)
