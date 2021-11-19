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
		<div className='grid grid-cols-9 gap-y-2 lg:gap-x-0 md:gap-x-2 grid-rows-2 relative bg-ocean pl-8 pr-3 lg:w-9/12 w-10/12 lg:h-52 md:h-40 h-32 rounded-xl mx-auto lg:-mt-28 -mt-14 z-10'>
			<div className=' col-span-2 row-span-2 relative -mt-8'>
				<ProfilePictureContainer
					image={foto_diri}
					className='md:w-11/12 lg:w-8/12'
				/>
			</div>
			<div className='relative col-span-3 lg:-ml-8 md:ml-2'>
				<div className='row-span-1 lg:pt-8 pt-6'>
					<p className='lg:text-base md:text-sm text-xs text-white font-semibold'>
						{formatNameForDetails(nama)}
					</p>
					<p className='lg:mt-4 mt-2 lg:text-sm md:text-xs text-2xs text-white'>
						{jurusan === 'ilmu_komputer'
							? 'Computer Science'
							: 'Information Systems'}
					</p>
				</div>
				<div className='lg:mt-8 md:mt-3 flex flex-row row-start-2 row-end-2 space-x-2 '>
					<a href={instagramUrl}>
						<Social.InstagramIcon
							width='w-7 lg:w-9'
							height='h-7 lg:h-9'
							backgroundColor={''}
						/>
					</a>
					<a href={lineUrl}>
						<Social.LineIcon
							width='w-7 lg:w-9'
							height='h-7 lg:h-9'
							backgroundColor={''}
						/>
					</a>
				</div>
			</div>
			<div className='relative col-span-3 md:ml-8'>
				<div className='row-span-1 lg:pt-8 pt-6'>
					<p className='lg:text-sm md:text-xs text-1.5xs text-white font-semibold'>
						Birth Information
					</p>
					<p className='mt-2 lg:text-sm md:text-xs text-2xs text-white'>
						{ttl}
					</p>
				</div>
				<div className='lg:mt-6 md:mt-4 row-start-2 row-end-2'>
					<p className='lg:text-sm md:text-xs text-1.5xs text-white font-semibold'>
						Hobby
					</p>
					<p className='mt-2 lg:text-sm md:text-xs text-2xs text-white'>
						{hobi}
					</p>
				</div>
			</div>
			<div className='col-span-1 row-span-2 my-auto'>
				<Video
					onClick={event => {}}
					className='rounded-md lg:w-16 lg:h-16 lg:p-4'
				/>
			</div>
		</div>
	)
}

export default BioSection
