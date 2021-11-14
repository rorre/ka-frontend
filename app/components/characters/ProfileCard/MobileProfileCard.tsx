import React from 'react'
import { GradientImageDiv } from './styles'
import { ProfilePictureContainer } from './ProfilePictureContainer'
import Student from '../interfaces/Student'
import * as utils from '../utils/helpers'

export const MobileProfileCard = ({
	nama,
	jurusan,
	foto_diri,
	house_name,
}: Student) => (
	<div className='relative'>
		<ProfilePictureContainer image={foto_diri} />
		<div className='absolute top-1.5 right-1.5'>
			{utils.getHouseIcon(house_name.split(' ').at(2)!)}
		</div>
		<GradientImageDiv className='absolute bottom-0 left-0 w-full pt-12 pb-3 px-2'>
			<p className='text-1.5xs text-white font-bold'>
				{utils.shortenName(nama)}
			</p>
			<p className='text-2xs text-white font-extralight'>
				{jurusan === 'ilmu_komputer'
					? 'Computer Science'
					: 'Information Systems'}
			</p>
		</GradientImageDiv>
	</div>
)

export default MobileProfileCard
