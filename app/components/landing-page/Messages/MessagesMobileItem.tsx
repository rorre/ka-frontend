import React from 'react'
import { MessagesCard } from '../styles'
import { MessagesMobileItemInterface } from './interfaces/MessagesMobileItem.interface'

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
		<MessagesCard>
			<div className='flex items-center space-x-7'>
				<img
					className='w-28 h-28 object-cover rounded-full mx-auto'
					src={image}
					alt={name}
				/>
				<div className='text-left'>
					<h4>{name}</h4>
					<p className='text-md'>
						{position}
						<br />
						{major}
					</p>
				</div>
			</div>
			{isClicked === index ? <p className='mt-7 text-left'>{message}</p> : null}
			<div onClick={accordionHandler}>
				<svg
					className={`w-full max-h-10 -mb-10 mt-5 ${
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
		</MessagesCard>
	)
}

export default MessagesMobileItem
