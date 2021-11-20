import React from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import getToKnowUsItems from './utils/getToKnowUsItems'
import GetToKnowUsCard from './GetToKnowUsCard'

const GetToKnowUs = () => {
	return (
		<section className='h-full mx-auto text-white max-w-9/10'>
			<h2 className='my-24 text-center 2md:text-left'>
				Get to
				<br />
				Know Us
			</h2>
			<div className='flex flex-wrap justify-center gap-5 xl:flex-nowrap'>
				{getToKnowUsItems.map(({ url, ...props }) => {
					return url.includes('http') ? (
						<a href={url} key={uuid()}>
							{<GetToKnowUsCard {...props} />}
						</a>
					) : (
						<Link href={url} passHref key={uuid()}>
							<a>{<GetToKnowUsCard {...props} />}</a>
						</Link>
					)
				})}
			</div>
		</section>
	)
}

export default GetToKnowUs
