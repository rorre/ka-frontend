import React from 'react'
import RequestSIGButton from '../../../public/assets/images/Request SIG Button.svg'
import Link from 'next/dist/client/link'
import DesktopTicketBackground from '../../../public/assets/images/Dekstop Ticket.svg'
import Image from 'next/image'

const DesktopSIG = () => {
	return (
		<div className='second container h-screen max-w-4xl justify-center hidden md:block'>
			<div className='title container flex flex-col h-1/5 w-full justify-center text-center content-start sticky'>
				<p className='text-3xl text-gray-200 leading-relaxed font-semibold'>
					Our Interests
				</p>
				<p className='text-md text-gray-200 leading-relaxed'>
					Mau aktif ikut lomba-lomba IT, tapi masih bingung cari partnernya?
					Atau mau belajar tentang IT, tapi bingung mau belajar bareng siapa?
					Yuk, join aja SIGs di bawah ini!
				</p>
			</div>
			<div className='body ticket container h-3/5 w-full py-3'>
				<div className='container h-full w-full overflow-auto overscroll-auto flex justify-center'>
					<div className='grid grid-cols-2 w-max h-20 justify-items-center gap-y-6 gap-x-2'>
						<div className='mx-5'>
							<Image src={DesktopTicketBackground} />
						</div>
						<div className='mx-5'>
							<Image src={DesktopTicketBackground} />
						</div>
						<div className='mx-5'>
							<Image src={DesktopTicketBackground} />
						</div>
						<div className='mx-5'>
							<Image src={DesktopTicketBackground} />
						</div>
						<div className='mx-5'>
							<Image src={DesktopTicketBackground} />
						</div>
						<div className='mx-5'>
							<Image src={DesktopTicketBackground} />
						</div>
					</div>
				</div>
			</div>
			<div className='footer container flex flex-col h-1/5 w-full justify-center text-center content-end sticky'>
				<p className='text-md text-gray-200 leading-relaxed'>
					Tidak menemukan Special Group Interest-mu di laman ini? Jangan sedih!
					Yuk, Request SIG yang kamu inginkan supaya kami bisa menyediakannya
					untuk kamu dan teman-temanmu!
				</p>
				<div className='container w-full h-10 justify-center flex pt-1 mb-2'>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={RequestSIGButton} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default DesktopSIG
