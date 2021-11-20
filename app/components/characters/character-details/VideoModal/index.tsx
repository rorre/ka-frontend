import React from 'react'
import { VideoModalInterface } from './interfaces/VideoModal.interface'
import { formatNameForDetails } from '../../utils/helpers'
import { Close } from '../buttons'
import VideoIcon from '../../../../../public/assets/Video.svg'
import { StyledVideo, StyledModal } from './styles'
import ReactPlayer from 'react-player'
import { useState } from 'react'

const VideoModal = ({
	video_diri,
	className,
	foto_diri,
	jurusan,
	nama,
	setShowVideo,
	showVideo,
}: VideoModalInterface) => {
	const [isLoading, setIsLoading] = useState(true)

	return !showVideo ? (
		<></>
	) : (
		<div className='absolute h-screen w-screen backdrop-filter backdrop-blur-xl z-20'>
			<StyledModal
				className={`${className} md:rounded-md absolute top-0 md:top-8 lg:top-10 lg:left-1/4 xl:left-1/3 md:left-32 mx-auto z-30 xl:w-4/12 lg:w-1/2 md:w-8/12 bg-dark-2 px-2`}>
				<div className=' mt-2 grid grid-cols-10 grid-rows-2 relative h-1/12'>
					<div className='col-span-1 row-span-2'>
						<img
							className='object-cover rounded-full w-16 h-12 p-1'
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
				</div>
				<div className='absolute top-3 right-3 md:ml-2 col-start-10 row-span-2 my-auto'>
					<Close className='rounded-md' onClick={() => setShowVideo(false)} />
				</div>
				<StyledVideo className='w-full flex items-center justify-center'>
					<div className={isLoading ? '' : 'hidden'}>
						<VideoIcon className='lg:w-32 md:w-28 w-24' />
					</div>
					<div className={isLoading ? 'hidden' : 'h-full w-full p-4'}>
						<ReactPlayer
							url={video_diri}
							width='100%'
							height='100%'
							onReady={() => {
								setIsLoading(false)
							}}
						/>
					</div>
				</StyledVideo>
			</StyledModal>
		</div>
	)
}

export default VideoModal
