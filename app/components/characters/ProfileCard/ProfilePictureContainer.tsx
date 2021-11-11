import React from 'react'
import { ProfilePicture, ProfileImageBorder } from './styles'

export const ProfilePictureContainer = ({ image }: { image: string }) => (
	<ProfileImageBorder className='rounded-md md:w-6/12 lg:my-1 md:mr-2.5'>
		<ProfilePicture className='h-full' src={image} alt='Profile-Image' />
	</ProfileImageBorder>
)
