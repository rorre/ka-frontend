import React from 'react'
import { InterestInterface } from './interfaces/Interest.interface'

const Interest = ({ interest }: InterestInterface) => {
	return (
		<div className='my-1 mx-1 bg-dark-2 px-3 py-2 text-white lg:text-xs text-xs rounded-full'>
			{interest}
		</div>
	)
}

export default Interest
