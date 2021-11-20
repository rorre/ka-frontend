import React from 'react'
import { MessagesCard } from '../styles'
import { MessagesItemInterface } from './interfaces/MessagesItem.interface'
import { MessagesImage } from '../styles'

const MessagesItem = ({
	name,
	position,
	major,
	image,
	message,
	index,
}: MessagesItemInterface) => {
	return (
		<MessagesCard
			className={`col-span-5
				${index === 0 ? 'row-start-2 col-end-6 row-span-4' : ''} 
				${index === 1 ? 'row-span-2 lg:col-span-4' : ''}
				${index === 2 ? 'row-start-3 row-span-4' : ''}
			`}>
			<div className='flex items-center gap-6'>
				<div>
					<MessagesImage src={image} alt={name} />
				</div>
				<div className='text-left'>
					<h4>{name}</h4>
					<p className='text-md'>
						{position}
						<br />
						{major}
					</p>
				</div>
			</div>
			<p className='text-left mt-7 overflow-y-auto text-justify'>{message}</p>
		</MessagesCard>
	)
}

export default MessagesItem
