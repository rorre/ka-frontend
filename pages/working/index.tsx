import React from 'react'
import Image from 'next/image'

const index = () => {
	return (
		<div className='w-full h-screen'>
			<section className='flex items-center justify-center w-full h-screen'>
				<div className='flex flex-col items-center justify-center gap-6'>
					<div className='text-center text-white'>
						<h1 className='text-4xl font-bold'>
							The page is under development
						</h1>
						<h2 className='text-lg font-medium'>
							Sorry for the inconvenience, but we’re working on it!
						</h2>
					</div>
					<div>
						<Image
							src='/assets/under_development.svg'
							alt='Under Development'
							width={727}
							height={352}
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default index
