import React from 'react'
import MobileTicket from '../components/SIG/assets/MobileTicket'
import RequestSIGButton from '../components/SIG/assets/RequestSIGButton'
import Link from 'next/dist/client/link'
import styled from 'styled-components'

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

const PassionsPage = () => {
	return (
		<div className='main container h-screen w-screen flex justify-center bg-gray-800 min-h-screen min-w-full'>
			<GradientBackgroundBlue />
			<GradientBackgroundRed />
			<div className='second container h-screen max-w-md justify-center'>
				<div className='title container flex flex-col h-1/6 w-full justify-center text-center content-start sticky'>
					<p className='text-xl text-gray-200 leading-relaxed font-semibold'>
						Our Interests
					</p>
					<p className='text-sm text-gray-200 leading-relaxed'>
						Mau aktif ikut lomba, tetapi masih bingung cari partnernya? Yuk,
						join Special Interest Group di bawah ini!
					</p>
				</div>
				<div className='body ticket container h-4/6 w-full py-3'>
					<div className='container h-full w-full overflow-auto overscroll-auto flex justify-center'>
						<div className='grid grid-cols-2 w-max h-20 justify-items-center gap-y-6 gap-x-2'>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='cursor-pointer'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
							<Link href='/'>
								<a className='bg-transparent'>
									<MobileTicket width={''} height={''} />
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className='footer container flex flex-col h-1/6 w-full justify-center text-center content-end sticky'>
					<p className='text-sm text-gray-200 leading-relaxed'>
						Yuk, Request SIG yang kamu inginkan supaya kami bisa menyediakannya
						untuk kamu dan teman-temanmu!
					</p>
					<div className='container w-full h-10 justify-center flex pt-1'>
						<Link href='/'>
							<a className='bg-transparent'>
								<RequestSIGButton width={''} height={''} />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PassionsPage
