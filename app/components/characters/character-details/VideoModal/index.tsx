import React from 'react'
import { VideoModalInterface } from './interfaces/VideoModal.interface'
import { formatNameForDetails } from '../../utils/helpers'
import { Close } from '../buttons'
import VideoIcon from '../../../../../public/assets/Video.svg'
import { StyledVideo } from './styles'

const VideoModal = ({
	video_diri,
	className,
	foto_diri,
	jurusan,
	nama,
	setShowVideo,
	showVideo,
}: VideoModalInterface) => {
	return (
		<div
			className={`${className} rounded-md absolute top-0 md:top-8 lg:left-1/3 md:left-32 mx-auto z-30 lg:w-4/12 md:w-8/12 lg:h-11/12 bg-dark-2 px-2 my-2`}>
			<div className=' mt-2 grid grid-cols-10 grid-rows-2 relative h-1/12'>
				<div className='col-span-1 row-span-2'>
					<img
						className='rounded-full w-16 h-12 p-1'
						src={foto_diri}
						alt='image'
					/>
				</div>
				<div className='relative ml-2 col-start-2 col-end-10 row-span-2'>
					<p className='text-white font-semibold text-xs mt-1'>
						{formatNameForDetails(nama)}
					</p>
					<p className='text-white text-1.5xs md:mt-1 mt-0'>
						{jurusan === 'ilmu_komputer'
							? 'Computer Science'
							: 'Information Systems'}
					</p>
				</div>
				<div className='relative md:ml-2 col-start-10 row-span-2 my-auto'>
					<Close className='rounded-md' onClick={() => setShowVideo(false)} />
				</div>
			</div>
			<StyledVideo className='w-full'>
				<VideoIcon className='mx-auto lg:w-32 md:w-28 w-24' />
			</StyledVideo>
		</div>
	)
}

export default VideoModal
