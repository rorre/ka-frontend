import React from 'react'
import { MessagesCard } from '../styles'

const Messages = () => {
	return (
		<section className='h-full text-white'>
			<div className='relative'>
				<img src='/assets/messages-petikdua.svg' className='mt-5 -mb-36 w-20' />
				<h2 className='my-24 text-center 2sm:max-w-md 2sm:text-left pt-3 pl-14'>
					Messages
				</h2>
			</div>
			<div className='2md:grid grid-rows-2 grid-cols-2 gap-7 text-gray-900 xl:max-w-3/4 mx-auto 2md:-mt-36 items-center'>
				<MessagesCard className='row-span-2'>
					<div className='flex items-center space-x-7'>
						<img
							className='w-28 h-28 object-cover rounded-full mx-auto'
							src='https://thumb.zigi.id/frontend/thumbnail/2021/07/19/zigi-60f57af76becc-rose-blackpink_910_512.jpeg'
							alt='name'
						/>
						<div className='text-left'>
							<h4>Name</h4>
							<p className='text-md'>
								Coordinator
								<br />
								Computer Science 2021
							</p>
						</div>
					</div>
					<p className='mt-7 text-left'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.Commodo
						nulla facilisi nullam vehicula ipsum a arcu.Enim neque volutpat ac
						tincidunt vitae semper.Eu augue ut lectus arcu bibendum at varius
						vel.Est pellentesque elit ullamcorper dignissim cras tincidunt
						lobortis feugiat vivamus.Lacus vel facilisis volutpat est velit
						egestas dui id ornare.Nec ultrices dui sapien eget.Risus nec feugiat
						in fermentum.Pretium quam vulputate dignissim suspendisse in est
						ante.Accumsan in nisl nisi scelerisque.Sem et tortor consequat id
						porta.Sed risus ultricies tristique nulla aliquet enim.Nibh praesent
						tristique ma
					</p>
				</MessagesCard>
				<MessagesCard className=''>
					<div className='flex items-center space-x-7'>
						<img
							className='w-28 h-28 object-cover rounded-full mx-auto'
							src='https://statics.indozone.id/content/2021/03/13/AqsbmP1/mv-debut-solo-rose-blackpink-on-the-ground-jadi-trending-no-162_700.jpg'
							alt='name'
						/>
						<div className='text-left'>
							<h4>Name</h4>
							<p className='text-md'>
								Head of PMB 2021
								<br />
								Computer Science 2021
							</p>
						</div>
					</div>
					<p className='mt-7 text-left'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.Commodo
						nulla facilisi nullam vehicula ipsum a arcu.Enim neque volutpat ac
						tincidunt vitae semper.Eu augue ut lectus arcu bibendum at varius
						vel.Est pellentesque elit ullamcorper dignissim cras tincidunt
						lobortis feugiat vivamus.Lacus vel facilisis volutpat est velit
						egestas dui id ornare.Nec ultrices dui sapien eget.Risus nec feugiat
						in fermentum.Pretium quam vulputate dignissim suspendisse in est
						ante.Accumsan in nisl nisi scelerisque.Sem et tortor consequat id
						porta.Sed risus ultricies tristique nulla aliquet enim.Nibh praesent
						tristique ma
					</p>
				</MessagesCard>
				<MessagesCard className=''>
					<div className='flex items-center space-x-7'>
						<img
							className='w-28 h-28 object-cover rounded-full mx-auto'
							src='https://statics.indozone.id/content/2021/03/13/AqsbmP1/mv-debut-solo-rose-blackpink-on-the-ground-jadi-trending-no-162_700.jpg'
							alt='name'
						/>
						<div className='text-left'>
							<h4>Name</h4>
							<p className='text-md'>
								Senior
								<br />
								Computer Science 2021
							</p>
						</div>
					</div>
					<p className='mt-7 text-left'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.Commodo
						nulla facilisi nullam vehicula ipsum a arcu.Enim neque volutpat ac
						tincidunt vitae semper.Eu augue ut lectus arcu bibendum at varius
						vel.Est pellentesque elit ullamcorper dignissim cras tincidunt
						lobortis feugiat vivamus.Lacus vel facilisis volutpat est velit
						egestas dui id ornare.Nec ultrices dui sapien eget.Risus nec feugiat
						in fermentum.Pretium quam vulputate dignissim suspendisse in est
						ante.Accumsan in nisl nisi scelerisque.Sem et tortor consequat id
						porta.Sed risus ultricies tristique nulla aliquet enim.Nibh praesent
						tristique ma
					</p>
				</MessagesCard>
			</div>
		</section>
	)
}

export default Messages
