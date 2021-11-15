import React from 'react'
import Link from 'next/dist/client/link'
import MobileTicket from './MobileTicket'
import { Sig } from './interfaces'
import { sigs } from './interfaces/Sigs'

const MobileSIG = () => {
	return (
		<div className='h-auto w-full flex flex-col justify-center items-center sm:hidden'>
			<div className='w-full h-24 flex-col flex items-center justify-center text-center'>
				<p className='text-xl text-gray-200 leading-relaxed font-semibold'>
					Our Interests
				</p>
				<p className='text-sm text-gray-200 leading-relaxed'>
					Mau aktif ikut lomba, tetapi masih bingung cari partnernya? Yuk, join
					Special Interest Group di bawah ini!
				</p>
			</div>
			<div className='h-auto w-full flex items-center justify-center'>
				<div className='grid grid-cols-2 gap-4'>
					{sigs.map((sig: Sig) => (
							<MobileTicket 
								key={sig.id}
								title={sig.title}
								desc={sig.desc}
								link={sig.link}
							/>
						))}
				</div>
			</div>
			<div className='w-full h-28 flex-col flex items-center justify-center text-center '>
				<p className='text-sm text-gray-200 leading-relaxed'>
					Yuk, Request SIG yang kamu inginkan supaya kami bisa menyediakannya
					untuk kamu dan teman-temanmu!
				</p>
				<div className='container w-full h-auto justify-center flex pt-1 mb-2'>
					<Link href='/'>
						<button className='bg-red-700 text-white font-bold py-2 px-4 rounded-full active:bg-red-900'>
							<p>Request SIG</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MobileSIG
