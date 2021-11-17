import React, { useState } from 'react'
import { MessageInterface } from './interfaces/Message.interface'
import MessagesItem from './MessagesItem'
import MessagesMobileItem from './MessagesMobileItem'
import { messages } from './utils/messages'
import { useResponsive } from '../../../hooks'

const Messages = () => {
	const { isMobile } = useResponsive()
	const [isClicked, setIsClicked] = useState(-1)
	return (
		<section className='h-full text-white'>
			<div className='relative'>
				<img src='/assets/messages-petikdua.svg' className='mt-5 -mb-36 w-20' />
				<h2 className='my-24 text-center 2sm:max-w-md 2sm:text-left pt-3 pl-14'>
					Messages
				</h2>
			</div>
			<div className='2md:grid grid-rows-2 grid-cols-2 gap-7 text-gray-900 xl:max-w-3/4 mx-auto 2md:-mt-36 items-center'>
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
