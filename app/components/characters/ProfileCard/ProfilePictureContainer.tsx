import React from 'react'
import { ProfilePicture, ProfileImageBorder } from './styles'
import { ProfilePictureContainerInterface } from './interfaces/ProfilePictureContainer.interface'

export const ProfilePictureContainer = ({
	image,
}: ProfilePictureContainerInterface) => (
	<ProfileImageBorder className='rounded-md md:w-6/12 md:mr-2.5 h-44 md:max-h-36 lg:h-auto lg:max-h-52'>
		<ProfilePicture className='h-full w-full' src={image} alt='Profile-Image' />
	</ProfileImageBorder>
)
