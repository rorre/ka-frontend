import React from 'react'
import { ProfilePicture, ProfileImageBorder } from './styles'
import { ProfilePictureContainerInterface } from './interfaces/ProfilePictureContainer.interface'

export const ProfilePictureContainer = ({
	image,
}: ProfilePictureContainerInterface) => (
	<ProfileImageBorder className='rounded-md md:w-6/12 md:mr-2.5 lg:mr-4 h-44 md:max-h-40 lg:max-h-52 lg:h-52'>
		<ProfilePicture
			className='w-full h-full lg:max-h-52 object-cover'
			src={image}
			alt='Profile-Image'
		/>
	</ProfileImageBorder>
)
