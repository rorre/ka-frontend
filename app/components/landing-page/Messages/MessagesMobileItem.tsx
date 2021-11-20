import React from 'react'
import { MobileMessagesCard } from '../styles'
import { MessagesMobileItemInterface } from './interfaces/MessagesMobileItem.interface'
import { MessagesImage } from '../styles'

const MessagesMobileItem = ({
	name,
	position,
	major,
	image,
	message,
	index,
	isClicked,
	setIsClicked,
}: MessagesMobileItemInterface) => {
	const accordionHandler = () => {
		if (isClicked !== index) {
			setIsClicked(index)
		} else {
			setIsClicked(-1)
		}
	}
	return (
		<MobileMessagesCard>
			<div className='flex flex-col items-center space-y-2'>
				<MessagesImage src={image} alt={name} />
				<div className='text-center'>
					<h4>{name}</h4>
					<p className='text-md'>
						{position}
						<br />
						{major}
					</p>
				</div>
			</div>
			<div onClick={accordionHandler}>
				<svg
					className={`w-full max-h-10 my-5 ${
						isClicked === index ? 'transform rotate-180' : 'animate-bounce'
					}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='gray'
					aria-hidden='true'>
					<path
						fillRule='evenodd'
						d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
			<div className={isClicked !== index ? 'hidden' : 'block overflow-y-auto'}>
				<p className='text-left'>{message}</p>
			</div>
		</MobileMessagesCard>
	)
}

export default MessagesMobileItem
