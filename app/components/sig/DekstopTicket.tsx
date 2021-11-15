import React from 'react'
import Link from 'next/dist/client/link'
import DesktopTicketBackground from '../../../public/assets/Dekstop Ticket.svg'
import Image from 'next/image'
import { Sig } from './interfaces'

const DesktopTicket = ({ title, link, desc }: Sig) => {
	return (
		<div className='container h-full w-full  relative'>
			<Image src={DesktopTicketBackground} className='' />
			<div className='container w-full h-full absolute top-0'>
				<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
					<p className='text-gray-400'>IT Interest</p>
					<h1 className='text-white text-2xl'>{title}</h1>
				</div>
				<div className='container w-full h-2/4  overflow-hidden '>
					<p className='sm:text-xxxs md:text-xxs lg:text-xs px-12 text-justify text-white'>
						{desc}
					</p>
				</div>
				<div className='container w-full h-1/4 flex justify-center items-center'>
					<Link href={link}>
						<button className='bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-1 px-8 md:px-10 lg:px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4'>
							<p className='text-xs md:text-base lg:text-xl'>Join SIG</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default DesktopTicket
