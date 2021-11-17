import React from 'react'

import Student from '../interfaces/Student'
import * as Social from '../social-media-icons'
import * as utils from '../utils/helpers'

import { LowerNotch, UpperNotch } from './styles'

import { ProfilePictureContainer } from './ProfilePictureContainer'

const ProfileCard = ({
	nama,
	jurusan,
	foto_diri,
	house_name,
	line,
	instagram,
}: Student) => {
	const lineUrl = 'https://line.me/R/ti/p/~' + line
	const instagramUrl = 'https://instagram.com/' + instagram

	return (
		<div className='bg-ocean py-2 pl-2 m-1.5 border-2 relative rounded-xl border-blue-500 pointer-events-none'>
			<UpperNotch className='border-2 border-blue-500' />

			<div className='flex divide-x-2 divide-dashed divide-red-800'>
				<ProfilePictureContainer image={foto_diri} />
				<div className='relative flex-col lg:w-7/12 sm:9/12 md:w-8/12 lg:pl-4 pl-4 lg:ml-5 md:ml-5'>
					<div className='order-1 mt-6 mb-1 ml-2 mr-1 text-1.5xs lg:text-xs text-white md:ml-0 md:mt-8 lg:mt-12'>
						{utils.shortenName(nama)}
					</div>
					<div className='order-2 ml-2 mr-1 text-2xs lg:text-1.5xs text-white md:ml-0 font-extralight'>
						{jurusan === 'ilmu_komputer'
							? 'Computer Science'
							: 'Information Systems'}
					</div>
					<div className='flex justify-start items-center text-2xs lg:text-1.5xs text-white order-3 mt-1 lg:mt-4 mr-1 md:mr-3'>
						{utils.getHouseIcon(house_name.split(' ').at(2)!)}
						{house_name.split(' ').at(2)}
					</div>
					<div className='flex justify-end order-4 mt-6 mr-1.5 lg:mr-2 md:mt-7 lg:mt-8'>
						<a href={lineUrl} className='pointer-events-auto'>
							<Social.LineIcon
								width='w-6 lg:w-8 md:mr-1 lg:mr-1'
								height='h-6 lg:h-8'
								backgroundColor={''}
							/>
						</a>
						<a href={instagramUrl} className='pointer-events-auto'>
							<Social.InstagramIcon
								width='w-6 lg:w-8'
								height='h-6 lg:h-8'
								backgroundColor={''}
							/>
						</a>
					</div>
				</div>
			</div>
			<LowerNotch className='border-2 border-blue-500' />
		</div>
	)
}

export default ProfileCard
