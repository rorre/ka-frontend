import React, { useState } from 'react'
import Image from 'next/image'
import { MessageInterface } from './interfaces/Message.interface'
import MessagesItem from './MessagesItem'
import MessagesMobileItem from './MessagesMobileItem'
import { messages } from './utils/messages'
import { useResponsive } from '../../../hooks'

const Messages = () => {
	const { isMobile } = useResponsive()
	const [isClicked, setIsClicked] = useState(-1)
	return (
		<section className='h-full px-8 text-white mx-auto md:max-w-9/10'>
			<div className='relative -top-48 lg:-top-28'>
				<div className='w-20 mt-5 -mb-40'>
					<Image
						src='/assets/messages-petikdua.svg'
						alt='double-quotes'
						width={80}
						height={80}
					/>
				</div>
				<div className='absolute'>
					<h2 className='max-w-md pt-3 my-24 text-left pl-14'>Messages</h2>
				</div>
			</div>
			<div className='items-center grid-cols-2 grid-rows-2 mx-auto text-gray-900 2md:grid gap-7 xl:max-w-5/6 2md:-mt-36'>
				{messages.map((message: MessageInterface, index) =>
					isMobile ? (
						<MessagesMobileItem
							key={index}
							{...message}
							index={index}
							setIsClicked={setIsClicked}
							isClicked={isClicked}
						/>
					) : (
						<MessagesItem key={index} {...message} index={index} />
					)
				)}
			</div>
		</section>
	)
}

export default Messages
