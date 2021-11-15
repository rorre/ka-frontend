import React from 'react'
import Link from 'next/dist/client/link'
import MobileTicketBackground from '../../../public/assets/Mobile Ticket.svg'
import Image from 'next/image'
import ModalTicket from '../../../public/assets/Mobile Modal.svg'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Sig } from './interfaces'

const MobileTicket = ({title, link, desc}: Sig) => {
	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => {
		setIsOpen(false)
	}

	const openModal = () => {
		setIsOpen(true)
	}
	return (
		<div>
			<button onClick={openModal} className=''>
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
							<div className='inline-block h-screen w-60 max-w-full overflow-hidden text-left align-middle transition-all transform'>
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
														{desc}
													</p>
												</div>
											</div>
											<div className='container h-1/6 w-full text-center justify-center flex'>
												<div className='container h-7 w-32 mt-3'>
													<Link href={link}>
														<button className='bg-red-700 text-white font-bold py-2 px-4 rounded-full active:bg-red-900'>
															<p>Join SIG</p>
														</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='modal-close container h-1/6 w-full flex justify-center items-center'>
										<div className='h-auto w-auto'>
											<button
												onClick={closeModal}
												className='bg-red-700 text-white font-bold py-2 px-4 rounded-full active:bg-red-900'>
												X
											</button>
										</div>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	)
}

export default MobileTicket
