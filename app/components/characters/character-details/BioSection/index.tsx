import React from 'react'
import * as Social from '../../social-media-icons'
import { DetailedStudent } from '../interfaces'
import { ProfilePictureContainer } from '../../ProfileCard/ProfilePictureContainer'
import { formatNameForDetails } from '../../utils/helpers'
import { Video } from '../buttons'

const BioSection = ({
	foto_diri,
	nama,
	jurusan,
	ttl,
	hobi,
	line,
	instagram,
}: DetailedStudent) => {
	const lineUrl = 'https://line.me/R/ti/p/~' + line
	const instagramUrl = 'https://instagram.com/' + instagram

	return (
		<div className='flex flex-row relative bg-ocean px-10 lg:w-9/12 w-10/12 lg:h-52 md:h-40 h-32 rounded-xl mx-auto lg:-mt-28 -mt-14 z-10'>
			<div
				className={`lg:w-72 ${
					nama.length > 25
						? nama.length > 40
							? 'md:w-full'
							: 'md:w-7/12'
						: 'md:w-5/12'
				} w-4/12 relative -mt-8`}>
				<ProfilePictureContainer image={foto_diri} />
			</div>
			<div
				className={`relative lg:-ml-24 ${
					nama.length > 25 ? 'md:-ml-24' : 'md:-ml-24'
				} my-auto lg:w-4/12`}>
				<p className='lg:text-base md:text-sm text-white font-semibold lg:mb-4 md:mb-2'>
					{formatNameForDetails(nama)}
				</p>
				<p className='lg:text-sm md:text-xs text-white mb-4'>
					{jurusan === 'ilmu_komputer'
						? 'Computer Science'
						: 'Information Systems'}
				</p>

				<div className='flex justify-start space-x-2'>
					<a href={instagramUrl}>
						<Social.InstagramIcon
							width='w-6 lg:w-9'
							height='h-6 lg:h-9'
							backgroundColor={''}
						/>
					</a>
					<a href={lineUrl}>
						<Social.LineIcon
							width='w-6 lg:w-9'
							height='h-6 lg:h-9'
							backgroundColor={''}
						/>
					</a>
				</div>
			</div>
			<div className='lg:ml-8 md:ml-8 relative my-auto lg:w-4/12'>
				<p className='lg:text-sm md:text-xs font-bold text-white mb-2'>
					Birth Information
				</p>
				<p className='lg:text-sm md:text-xs text-white'>{ttl}</p>
				<br />
				<p className='lg:text-sm md:text-xs font-bold text-white mb-2'>Hobby</p>
				<p className='lg:text-sm md:text-xs text-white'>{hobi}</p>
			</div>
			<div
				className={`relative my-auto lg:ml-0 ${
					nama.length < 25 ? 'md:ml-16' : 'md:ml-10'
				}`}>
				<Video className='rounded-md lg:w-16 lg:h-16 lg:p-3' />
			</div>
		</div>
	)
}

export default BioSection
