import React from 'react'
import { useResponsive } from '../../../../hooks'

const ClapperBackground = () => {
	const { isDesktop } = useResponsive()
	return (
		<div className='flex flex-row'>
			<div className='lg:w-2/12 w-1/5 lg:h-72 md:h-52 h-28 bg-indigo'></div>
			<div className='lg:w-2/12 w-1/5 lg:h-72 md:h-52 h-28 bg-purple'></div>
			<div className='lg:w-2/12 w-1/5 lg:h-72 md:h-52 h-28 bg-indigo'></div>
			<div className='lg:w-2/12 w-1/5 lg:h-72 md:h-52 h-28 bg-purple'></div>
			<div className='lg:w-2/12 w-1/5 lg:h-72 md:h-52 h-28 bg-indigo'></div>
			{isDesktop && <div className='lg:w-2/12 w-1/5 bg-purple'></div>}
		</div>
	)
}

export default ClapperBackground
