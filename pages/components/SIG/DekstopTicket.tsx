import React from 'react'
import Link from 'next/dist/client/link'
import DesktopTicketBackground from '../../../public/assets/Dekstop Ticket.svg'
import Image from 'next/image'

const DesktopTicket = () => {
	return (
		<div className='container h-full w-full  relative'>
			<Image src={DesktopTicketBackground} className='' />
			<div className='container w-full h-full absolute top-0'>
				<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
					<p className='text-gray-400'>IT Interest</p>
					<h1 className='text-white text-2xl'>Programing</h1>
				</div>
				<div className='container w-full h-2/4  overflow-hidden '>
					<p className='sm:text-xxxs md:text-xxs px-12 text-justify text-white'>
						Programming adalah sebuah proses untuk membuat suatu program di
						komputer yang dapat berupa software, website, aplikasi, dan lain
						sebagainya. Proses ini melibatkan beberapa tahap pemrograman, mulai
						dari tulis menulis, menguji, merevisi, dan mengevaluasi, serta
						mengujinya lagi sampai program tersebut benar-benar sesuai dengan
						apa yang diinginkan oleh seorang programmer. Pada perlombaan
						Programming, biasanya kita akan dihadapi dengan permasalahan IT yang
						akan menguji kemampuan dan nalar kita untuk dapat menyelesaikannya
						dengan suatu program komputer.{' '}
					</p>
				</div>
				<div className='container w-full h-1/4 flex justify-center items-center'>
					<Link href='/'>
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
