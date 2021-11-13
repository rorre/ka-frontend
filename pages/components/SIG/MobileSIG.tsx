import React from 'react'
import RequestSIGButton from '../../../public/assets/Request SIG Button.svg'
import Link from 'next/dist/client/link'
import MobileTicketBackground from '../../../public/assets/Mobile Ticket.svg'
import Image from 'next/image'
import styled from 'styled-components'
import ModalTicket from '../../../public/assets/Mobile Modal.svg'
import ModalClose from '../../../public/assets/Modal Close.svg'
import ModalJoin from '../../../public/assets/Modal Join.svg'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const MobileSIG = () => {
	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => {
		setIsOpen(false)
	}

	const openModal = () => {
		setIsOpen(true)
	}

	return (
		<div className='h-auto w-full flex flex-col justify-center items-center border-red-600 border sm:hidden'>
			<div className='border border-red-600 w-full h-24 flex-col flex items-center justify-center text-center'>
				<p className='text-xl text-gray-200 leading-relaxed font-semibold'>
					Our Interests
				</p>
				<p className='text-sm text-gray-200 leading-relaxed'>
					Mau aktif ikut lomba, tetapi masih bingung cari partnernya? Yuk, join
					Special Interest Group di bawah ini!
				</p>
			</div>
			<div className='h-auto w-full flex items-center justify-center border-red-600 border'>
				<div className='grid grid-cols-2 gap-4'>
					<button onClick={openModal} className='border-red-600 border'>
						<Image src={MobileTicketBackground} />
					</button>
					<Transition appear show={isOpen} as={Fragment}>
						<Dialog
							as='div'
							className='fixed inset-0 z-10 overflow-y-auto'
							onClose={closeModal}>
							<div className='min-h-screen px-4 text-center'>
								<Transition.Child
									as={Fragment}
									enter='ease-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in duration-200'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'>
									<Dialog.Overlay className='fixed inset-0' />
								</Transition.Child>

								{/* This element is to trick the browser into centering the modal contents. */}
								<span
									className='inline-block h-screen align-middle'
									aria-hidden='true'>
									&#8203;
								</span>
								<Transition.Child
									as={Fragment}
									enter='ease-out duration-300'
									enterFrom='opacity-0 scale-95'
									enterTo='opacity-100 scale-100'
									leave='ease-in duration-200'
									leaveFrom='opacity-100 scale-100'
									leaveTo='opacity-0 scale-95'>
									<div className='inline-block h-screen w-screen max-w-full overflow-hidden text-left align-middle transition-all transform bg-gray-800 bg-opacity-50'>
										<div className='flex flex-col h-full w-full justify-center items-center'>
											<div className='modal ticket container h-5/6 w-full flex justify-center mt-5 relative'>
												<Image src={ModalTicket} />
												<div className='container h-full w-52 absolute top-0'>
													<div className='container h-1/6 w-full text-center flex flex-col items-center justify-center'>
														<p className='text-gray-400 text-xs'>IT Interest</p>
														<h1 className='text-white text-lg'>Programing</h1>
													</div>
													<div className='container h-4/6 w-full flex items-center justify-center'>
														<div className='container h-full w-40 overflow-hidden'>
															<p className='text-xxxs text-justify text-white'>
																Programming adalah sebuah proses untuk membuat
																suatu program di komputer yang dapat berupa
																software, website, aplikasi, dan lain
																sebagainya. Proses ini melibatkan beberapa tahap
																pemrograman, mulai dari tulis menulis, menguji,
																merevisi, dan mengevaluasi, serta mengujinya
																lagi sampai program tersebut benar-benar sesuai
																dengan apa yang diinginkan oleh seorang
																programmer. Pada perlombaan Programming,
																biasanya kita akan dihadapi dengan permasalahan
																IT yang akan menguji kemampuan dan nalar kita
																untuk dapat menyelesaikannya dengan suatu
																program komputer.{' '}
															</p>
														</div>
													</div>
													<div className='container h-1/6 w-full text-center justify-center flex'>
														<div className='container h-7 w-32 mt-3'>
															<button>
																<Image src={ModalJoin} />
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className='modal-close container h-1/6 w-full flex justify-center'>
												<button onClick={closeModal}>
													<div className='container h-max w-max'>
														<Image src={ModalClose} />
													</div>
												</button>
											</div>
										</div>
									</div>
								</Transition.Child>
							</div>
						</Dialog>
					</Transition>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={MobileTicketBackground} />
						</a>
					</Link>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={MobileTicketBackground} />
						</a>
					</Link>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={MobileTicketBackground} />
						</a>
					</Link>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={MobileTicketBackground} />
						</a>
					</Link>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={MobileTicketBackground} />
						</a>
					</Link>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={MobileTicketBackground} />
						</a>
					</Link>
					<Link href='/'>
						<a className='bg-transparent'>
							<Image src={MobileTicketBackground} />
						</a>
					</Link>
				</div>
			</div>
			<div className='border border-red-600 w-full h-28 flex-col flex items-center justify-center text-center'>
				<p className='text-sm text-gray-200 leading-relaxed'>
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

export default MobileSIG
