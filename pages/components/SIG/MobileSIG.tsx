import React from 'react'
import RequestSIGButton from '../../../public/assets/Request SIG Button.svg'
import Link from 'next/dist/client/link'
import MobileTicketBackground from '../../../public/assets/Mobile Ticket.svg'
import Image from 'next/image'
import styled from 'styled-components'
import ModalTicket from '../../../public/assets/Mobile Modal.svg'
import ModalClose from '../../../public/assets/Modal Close.svg'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const GradientBackgroundRed = styled.div`
	position: fixed;
	top: 12rem;
	right: 0;
	width: 20%;
	height: 60vh;
	background: linear-gradient(162.58deg, #ab1818 0.93%, #e03838 109.38%);
	box-shadow: 10px 10px 10px rgba(242, 60, 60, 0.25);
	filter: blur(150px);
	transform: rotate(166.08deg);
`

const GradientBackgroundBlue = styled.div`
	position: fixed;
	top: 12rem;
	left: 0;
	width: 20%;
	height: 60vh;
	background: linear-gradient(316.49deg, #3958ce -17.19%, #164f85 103.21%);
	box-shadow: 10px 10px 10px rgba(242, 60, 60, 0.25);
	filter: blur(150px);
	transform: rotate(166.08deg);
`

const MobileSIG = () => {
	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => {
		setIsOpen(false)
	}

	const openModal = () => {
		setIsOpen(true)
	}

	return (
		<div>
			<GradientBackgroundBlue />
			<GradientBackgroundRed />
			<div className='container justify-center h-screen max-w-md second md:hidden'>
				<div className='container sticky flex flex-col content-start justify-center w-full text-center title h-1/5'>
					<p className='text-xl font-semibold leading-relaxed text-gray-200'>
						Our Interests
					</p>
					<p className='text-sm leading-relaxed text-gray-200'>
						Mau aktif ikut lomba, tetapi masih bingung cari partnernya? Yuk,
						join Special Interest Group di bawah ini!
					</p>
				</div>
				<div className='container w-full py-3 body ticket h-3/5'>
					<div className='container flex justify-center w-full h-full overflow-auto overscroll-auto'>
						<div className='grid h-20 grid-cols-2 w-max justify-items-center gap-y-6 gap-x-2'>
							<button onClick={openModal}>
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
											<div className='inline-block w-screen h-screen max-w-full overflow-hidden text-left align-middle transition-all transform bg-gray-800 bg-opacity-50'>
												<div className='container flex justify-center w-full mt-5 modal ticket h-5/6'>
													<Image src={ModalTicket} />
												</div>
												<div className='container flex justify-center w-full modal-close h-1/6'>
													<button onClick={closeModal}>
														<div className='container h-max w-max'>
															<Image src={ModalClose} />
														</div>
													</button>
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
				</div>
				<div className='container sticky flex flex-col content-end justify-center w-full text-center footer h-1/5'>
					<p className='text-sm leading-relaxed text-gray-200'>
						Yuk, Request SIG yang kamu inginkan supaya kami bisa menyediakannya
						untuk kamu dan teman-temanmu!
					</p>
					<div className='container flex justify-center w-full h-10 pt-1 mb-2'>
						<Link href='/'>
							<a className='bg-transparent'>
								<Image src={RequestSIGButton} />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileSIG
