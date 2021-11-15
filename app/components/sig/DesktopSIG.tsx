import React from 'react'
import Link from 'next/dist/client/link'
import DesktopTicket from './DekstopTicket'
import { Sig } from './interfaces'
import { sigs } from './utils/sigs'

const DesktopSIG = () => {
	return (
		<div className='second container h-auto w-full max-w-4xl hidden sm:flex flex-col items-center justify-center'>
			<div className='title container h-40 w-full flex flex-col items-center justify-center text-center'>
				<p className='text-2xl lg:text-3xl text-gray-200 leading-relaxed font-semibold'>
					Our Interests
				</p>
				<p className='text-sm lg:text-base text-gray-200 leading-relaxed'>
					Mau aktif ikut lomba-lomba IT, tapi masih bingung cari partnernya?
					Atau mau belajar tentang IT, tapi bingung mau belajar bareng siapa?
					Yuk, join aja SIGs di bawah ini!
				</p>
			</div>
			<div className='body h-auto w-full flex items-center justify-center'>
				<div className='container h-full w-full flex justify-center items-center'>
					<div className='grid grid-cols-2 gap-4'>
						{sigs.map((sig: Sig) => (
							<DesktopTicket
								key={sig.id}
								title={sig.title}
								desc={sig.desc}
								link={sig.link}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='title container h-40 w-full border-gray-400 border-b-2 flex flex-col items-center justify-center text-center'>
				<p className='text-sm lg:text-base text-gray-200 leading-relaxed'>
					Tidak menemukan Special Group Interest-mu di laman ini? Jangan sedih!
					Yuk, Request SIG yang kamu inginkan supaya kami bisa menyediakannya
					untuk kamu dan teman-temanmu!
				</p>
				<div className='container w-full h-10 justify-center flex items-center mt-5'>
					<Link href='/'>
						<button className='bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
							Request SIG
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default DesktopSIG
