import React from 'react'
import RequestSIGButton from '../../../public/assets/Request SIG Button.svg'
import Link from 'next/dist/client/link'
import DesktopTicketBackground from '../../../public/assets/Dekstop Ticket.svg'
import JoinSIG from '../../../public/assets/Join SIG.svg'
import Image from 'next/image'
import { Scrollbar } from 'react-scrollbars-custom'

const DesktopSIG = () => {
	return (
		<div className='second container h-screen w-screen max-w-4xl justify-center hidden md:flex flex-col items-center '>
			<div className='title container flex flex-col h-1/5 w-full justify-center text-center content-start sticky'>
				<p className='text-2xl lg:text-3xl text-gray-200 leading-relaxed font-semibold'>
					Our Interests
				</p>
				<p className='text-sm lg:text-base text-gray-200 leading-relaxed'>
					Mau aktif ikut lomba-lomba IT, tapi masih bingung cari partnernya?
					Atau mau belajar tentang IT, tapi bingung mau belajar bareng siapa?
					Yuk, join aja SIGs di bawah ini!
				</p>
			</div>
			<div className='body ticket container h-3/5 w-full py-3'>
				<div className='container h-full w-full overflow-auto overscroll-auto flex justify-center '>
					<Scrollbar style={{ width: '100%', height: '100%' }}>
						<div className='grid grid-cols-2 w-full h-20 justify-items-center gap-y-6 gap-x-2 '>
							<div className='mx-5 container h-full w-full  relative '>
								<Image src={DesktopTicketBackground} className='' />
								<div className='container w-full h-full  z-10 absolute top-0'>
									<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
										<p className='text-gray-400'>IT Interest</p>
										<h1 className='text-white text-2xl'>Programing</h1>
									</div>
									<div className='container w-full h-2/4  overflow-hidden '>
										<p className='text-xxs px-12 text-justify text-white'>
											Programming adalah sebuah proses untuk membuat suatu
											program di komputer yang dapat berupa software, website,
											aplikasi, dan lain sebagainya. Proses ini melibatkan
											beberapa tahap pemrograman, mulai dari tulis menulis,
											menguji, merevisi, dan mengevaluasi, serta mengujinya lagi
											sampai program tersebut benar-benar sesuai dengan apa yang
											diinginkan oleh seorang programmer. Pada perlombaan
											Programming, biasanya kita akan dihadapi dengan
											permasalahan IT yang akan menguji kemampuan dan nalar kita
											untuk dapat menyelesaikannya dengan suatu program
											komputer.{' '}
										</p>
									</div>
									<div className='container w-full h-1/4 flex justify-center items-center'>
										<div className='container h-1/2 w-48 mt-10 lg:h-full lg:w-full lg:mt-0 flex flex-col p-5 justify-end items-center'>
											<button className=' object-center flex m-15 flex-no-shrink fill-current'>
												<Image src={JoinSIG} />
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='mx-5 container h-full w-full  relative '>
								<Image src={DesktopTicketBackground} className='' />
								<div className='container w-full h-full  z-10 absolute top-0'>
									<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
										<p className='text-gray-400'>IT Interest</p>
										<h1 className='text-white text-2xl'>Programing</h1>
									</div>
									<div className='container w-full h-2/4  overflow-hidden '>
										<p className='text-xxs px-12 text-justify text-white'>
											Programming adalah sebuah proses untuk membuat suatu
											program di komputer yang dapat berupa software, website,
											aplikasi, dan lain sebagainya. Proses ini melibatkan
											beberapa tahap pemrograman, mulai dari tulis menulis,
											menguji, merevisi, dan mengevaluasi, serta mengujinya lagi
											sampai program tersebut benar-benar sesuai dengan apa yang
											diinginkan oleh seorang programmer. Pada perlombaan
											Programming, biasanya kita akan dihadapi dengan
											permasalahan IT yang akan menguji kemampuan dan nalar kita
											untuk dapat menyelesaikannya dengan suatu program
											komputer.{' '}
										</p>
									</div>
									<div className='container w-full h-1/4 flex justify-center items-center'>
										<div className='container h-1/2 w-48 mt-10 lg:h-full lg:w-full lg:mt-0 flex flex-col p-5 justify-end items-center '>
											<button className=' object-center flex m-15 flex-no-shrink fill-current '>
												<Image src={JoinSIG} />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Scrollbar>
				</div>
			</div>
			<div className='footer container flex flex-col h-1/5 w-full justify-center text-center content-end sticky'>
				<p className='text-sm lg:text-base text-gray-200 leading-relaxed'>
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
