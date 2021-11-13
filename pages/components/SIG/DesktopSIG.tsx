import React from 'react'
import RequestSIGButton from '../../../public/assets/Request SIG Button.svg'
import Link from 'next/dist/client/link'
import DesktopTicketBackground from '../../../public/assets/Dekstop Ticket.svg'
import JoinSIG from '../../../public/assets/Join SIG.svg'
import Image from 'next/image'

const DesktopSIG = () => {
	return (
		<div className='second container h-auto w-full max-w-4xl hidden sm:flex flex-col items-center border border-red-600 justify-center'>
			<div className='title container h-40 w-full border-red-600 border flex flex-col items-center justify-center text-center'>
				<p className='text-2xl lg:text-3xl text-gray-200 leading-relaxed font-semibold'>
					Our Interests
				</p>
				<p className='text-sm lg:text-base text-gray-200 leading-relaxed'>
					Mau aktif ikut lomba-lomba IT, tapi masih bingung cari partnernya?
					Atau mau belajar tentang IT, tapi bingung mau belajar bareng siapa?
					Yuk, join aja SIGs di bawah ini!
				</p>
			</div>
			<div className='body h-auto w-full border-red-600 border flex items-center justify-center'>
				<div className='container h-full w-full flex justify-center items-center border-red-600 border'>
					<div className='grid grid-cols-2 gap-4'>
						<div className='container h-full w-full  relative border border-red-600'>
							<Image src={DesktopTicketBackground} className='' />
							<div className='container w-full h-full  z-10 absolute top-0'>
								<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
									<p className='text-gray-400'>IT Interest</p>
									<h1 className='text-white text-2xl'>Programing</h1>
								</div>
								<div className='container w-full h-2/4  overflow-hidden '>
									<p className='sm:text-xxxs md:text-xxs px-12 text-justify text-white'>
										Programming adalah sebuah proses untuk membuat suatu program
										di komputer yang dapat berupa software, website, aplikasi,
										dan lain sebagainya. Proses ini melibatkan beberapa tahap
										pemrograman, mulai dari tulis menulis, menguji, merevisi,
										dan mengevaluasi, serta mengujinya lagi sampai program
										tersebut benar-benar sesuai dengan apa yang diinginkan oleh
										seorang programmer. Pada perlombaan Programming, biasanya
										kita akan dihadapi dengan permasalahan IT yang akan menguji
										kemampuan dan nalar kita untuk dapat menyelesaikannya dengan
										suatu program komputer.{' '}
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
						<div className='container h-full w-full  relative '>
							<Image src={DesktopTicketBackground} className='' />
							<div className='container w-full h-full  z-10 absolute top-0'>
								<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
									<p className='text-gray-400'>IT Interest</p>
									<h1 className='text-white text-2xl'>Programing</h1>
								</div>
								<div className='container w-full h-2/4  overflow-hidden '>
									<p className='sm:text-xxxs md:text-xxs px-12 text-justify text-white'>
										Programming adalah sebuah proses untuk membuat suatu program
										di komputer yang dapat berupa software, website, aplikasi,
										dan lain sebagainya. Proses ini melibatkan beberapa tahap
										pemrograman, mulai dari tulis menulis, menguji, merevisi,
										dan mengevaluasi, serta mengujinya lagi sampai program
										tersebut benar-benar sesuai dengan apa yang diinginkan oleh
										seorang programmer. Pada perlombaan Programming, biasanya
										kita akan dihadapi dengan permasalahan IT yang akan menguji
										kemampuan dan nalar kita untuk dapat menyelesaikannya dengan
										suatu program komputer.{' '}
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
						<div className='container h-full w-full  relative '>
							<Image src={DesktopTicketBackground} className='' />
							<div className='container w-full h-full  z-10 absolute top-0'>
								<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
									<p className='text-gray-400'>IT Interest</p>
									<h1 className='text-white text-2xl'>Programing</h1>
								</div>
								<div className='container w-full h-2/4  overflow-hidden '>
									<p className='sm:text-xxxs md:text-xxs px-12 text-justify text-white'>
										Programming adalah sebuah proses untuk membuat suatu program
										di komputer yang dapat berupa software, website, aplikasi,
										dan lain sebagainya. Proses ini melibatkan beberapa tahap
										pemrograman, mulai dari tulis menulis, menguji, merevisi,
										dan mengevaluasi, serta mengujinya lagi sampai program
										tersebut benar-benar sesuai dengan apa yang diinginkan oleh
										seorang programmer. Pada perlombaan Programming, biasanya
										kita akan dihadapi dengan permasalahan IT yang akan menguji
										kemampuan dan nalar kita untuk dapat menyelesaikannya dengan
										suatu program komputer.{' '}
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
						<div className='container h-full w-full  relative '>
							<Image src={DesktopTicketBackground} className='' />
							<div className='container w-full h-full  z-10 absolute top-0'>
								<div className='container w-full h-1/4  text-center flex flex-col justify-center items-center content-center'>
									<p className='text-gray-400'>IT Interest</p>
									<h1 className='text-white text-2xl'>Programing</h1>
								</div>
								<div className='container w-full h-2/4  overflow-hidden '>
									<p className='sm:text-xxxs md:text-xxs px-12 text-justify text-white'>
										Programming adalah sebuah proses untuk membuat suatu program
										di komputer yang dapat berupa software, website, aplikasi,
										dan lain sebagainya. Proses ini melibatkan beberapa tahap
										pemrograman, mulai dari tulis menulis, menguji, merevisi,
										dan mengevaluasi, serta mengujinya lagi sampai program
										tersebut benar-benar sesuai dengan apa yang diinginkan oleh
										seorang programmer. Pada perlombaan Programming, biasanya
										kita akan dihadapi dengan permasalahan IT yang akan menguji
										kemampuan dan nalar kita untuk dapat menyelesaikannya dengan
										suatu program komputer.{' '}
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
					</div>
				</div>
			</div>
			<div className='title container h-40 w-full border-red-600 border flex flex-col items-center justify-center text-center'>
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
