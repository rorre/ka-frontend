import React from 'react'
import { Card, Image } from '../styles'
import { GetToKnowUsCardInterface } from './interfaces/GetToKnowUsCard.interface'

const GetToKnowUsCard = ({
	title,
	description,
	iconUrl,
}: GetToKnowUsCardInterface) => {
	return (
		<Card className='w-72'>
			<Image src={iconUrl} alt='Yearbook' />
			<h3 className='text-2xl mb-7'>{title}</h3>
			<p className='text-md'>{description}</p>
		</Card>
	)
}

export default GetToKnowUsCard
