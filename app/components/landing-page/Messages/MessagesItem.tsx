import React from 'react'
import { MessagesCard } from '../styles'
import { MessagesItemInterface } from './interfaces/MessagesItem.interface'

const MessagesItem = ({
	nama,
	jabatan,
	jurusan,
	foto,
	pesan,
	index,
}: MessagesItemInterface) => {
	return (
		<MessagesCard className={index === 0 ? 'row-span-2' : ''}>
			<div className='flex items-center space-x-7'>
				<img
					className='w-28 h-28 object-cover rounded-full mx-auto'
					src={foto}
					alt={nama}
				/>
				<div className='text-left'>
					<h4>{nama}</h4>
					<p className='text-md'>
						{jabatan}
						<br />
						{jurusan}
					</p>
				</div>
			</div>
			<p className='mt-7 text-left'>{pesan}</p>
		</MessagesCard>
	)
}

export default MessagesItem
