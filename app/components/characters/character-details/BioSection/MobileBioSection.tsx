import React from 'react'
import * as Social from '../../social-media-icons'
import { BioSectionInterface } from './interfaces/BioSection.interface'
import { ProfilePictureContainer } from '../../ProfileCard/ProfilePictureContainer'
import { formatNameForDetails } from '../../utils/helpers'
import { Video } from '../buttons'

const MobileBioSection = ({
	student,
	setShowVideo,
	showVideo,
}: BioSectionInterface) => {
	const { foto_diri, nama, jurusan, ttl, hobi, line, instagram } = student
	const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + `/assets/student`
	const lineUrl = 'https://line.me/R/ti/p/~' + line
	const instagramUrl = 'https://instagram.com/' + instagram

	return (
		<div
			className={`grid grid-rows-2 gap-x-2 grid-cols-6 relative bg-ocean p-2 w-10/12 ${
				nama.length > 45 ? 'h-60' : 'h-52'
			} rounded-xl mx-auto -mt-14 z-10`}>
			<div className='relative col-start-1 col-end-3 row-span-1 -mt-6 ml-2'>
				<ProfilePictureContainer
					image={`${imageUrl}/${foto_diri}`}
					className='w-full h-32'
				/>
			</div>
			<div className='ml-2 col-start-3 col-end-6 row-span-1 relative'>
				<p className='mt-2 text-xs text-white font-semibold'>
					{formatNameForDetails(nama)}
				</p>
				<p className='mt-2 text-1.5xs text-white'>
					{jurusan === 'ilmu_komputer'
						? 'Computer Science'
						: 'Information Systems'}
				</p>
				<div className='mt-2 flex flex-row row-start-2 row-end-2 space-x-2 '>
					<a href={instagramUrl}>
						<Social.InstagramIcon
							width='w-6'
							height='h-6'
							backgroundColor={''}
						/>
					</a>
					<a href={lineUrl}>
						<Social.LineIcon width='w-6' height='h-6' backgroundColor={''} />
					</a>
				</div>
			</div>
			<div className='col-start-6 row-span-1 my-auto ml-1.5'>
				<Video
					onClick={event => {
						setShowVideo(!showVideo)
					}}
					className='rounded-md'
				/>
			</div>
			<div className='col-start-1 col-end-4 row-start-2 mt-8 ml-4'>
				<p className='text-1.5xs text-white font-semibold'>Birth Information</p>
				<p className='mt-1 text-1.5xs text-white'>{ttl}</p>
			</div>
			<div className='col-start-4 col-end-7 row-start-2 mt-8 ml-4'>
				<p className='text-1.5xs text-white font-semibold'>Hobi</p>
				<p className='mt-1 text-1.5xs text-white'>{hobi}</p>
			</div>
		</div>
	)
}

export default MobileBioSection
