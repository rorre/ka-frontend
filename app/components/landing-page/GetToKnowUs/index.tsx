import React from 'react'
import Link from 'next/link'
import getToKnowUsItems from './utils/getToKnowUsItems'
import GetToKnowUsCard from './GetToKnowUsCard'

const GetToKnowUs = () => {
	return (
		<section className='h-full text-white mx-auto max-w-9/10'>
			<h2 className='my-24 text-center 2md:text-left'>
				Get to
				<br />
				Know Us
			</h2>
			<div className='flex flex-wrap justify-center gap-5 xl:flex-nowrap'>
				{getToKnowUsItems.map(({ url, ...props }) => {
					return url.includes('http') ? (
						<a href={url}>{<GetToKnowUsCard {...props} />}</a>
					) : (
						<Link href={url} passHref>
							<a>{<GetToKnowUsCard {...props} />}</a>
						</Link>
					)
				})}
			</div>
		</section>
	)
}

export default GetToKnowUs
