import React from 'react'
import { ProfilePicture } from './styles'

export const ProfilePictureContainer = ({ image }: { image: string }) => (
	<div className='rounded-md w-6/12 lg:my-1 border-2 border-blue-400 mr-2.5'>
		<ProfilePicture
			className='h-full rounded-md'
			src={image}
			alt='Profile-Image'
		/>
	</div>
)
