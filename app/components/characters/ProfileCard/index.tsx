import React from 'react'

import Student from '../ts/interfaces/Student'
import * as Social from '../social-media-icons'
import * as utils from '../utils/helpers'

import { LowerNotch, UpperNotch, GradientImageDiv } from './styles'
import { useResponsive } from './hooks'
import { ProfilePictureContainer } from './ProfilePictureContainer'

const ProfileCard = ({ name, major, image, house }: Student) => {
	const { isMobile } = useResponsive()

	if (isMobile) {
		return (
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
	}
	return (
		<div className='bg-ocean py-2 pl-2 m-1.5 border-2 relative rounded-xl border-blue-500'>
			<UpperNotch className='border-2 border-blue-500' />

			<div className='flex divide-x-2 divide-dashed divide-red-800'>
				<ProfilePictureContainer image={image} />
				<div className='relative flex-col lg:w-8/12 sm:9/12 md:w-10/12 pl-3 ml-4'>
					<div className='order-1 mt-8 mb-1 ml-2 mr-1 text-1.5xs lg:text-sm text-white md:ml-0 md:mt-3 lg:mt-8'>
						{utils.shortenName(name)}
					</div>
					<div className='order-2 ml-2 mr-1 text-2xs lg:text-xs text-white md:ml-0 font-extralight'>
						{major}
					</div>
					<div className='flex justify-start items-center text-2xs lg:text-xs text-white order-3 mt-1 mr-1 md:mr-3'>
						{utils.getHouseIcon(house)} {house}
					</div>
					<div className='flex justify-end order-4 mt-6 mr-1.5 md:mt-2 lg:mt-6'>
						<Social.LineIcon
							width='w-6 lg:w-8 md:mr-1 lg:mr-1'
							height='h-6 lg:h-8'
							backgroundColor={''}
						/>
						<Social.InstagramIcon
							width='w-6 lg:w-8'
							height='h-6 lg:h-8'
							backgroundColor={''}
						/>
					</div>
				</div>
			</div>
			<LowerNotch className='border-2 border-blue-500' />
		</div>
	)
}

export default ProfileCard
