import React from 'react'
import { ProfilePicture, ProfileImageBorder } from './styles'
import { ProfilePictureContainerInterface } from './interfaces/ProfilePictureContainer.interface'

export const ProfilePictureContainer = ({
	image,
}: ProfilePictureContainerInterface) => (
	<ProfileImageBorder className='rounded-md md:w-6/12 lg:my-1 md:mr-2.5'>
		<ProfilePicture className='h-full' src={image} alt='Profile-Image' />
	</ProfileImageBorder>
)
