import React, { ReactNode } from 'react'

type LayoutProps = {
	children: ReactNode
}

const CharacterDetailsLayout = ({ children }: LayoutProps) => (
	<main className='bg-no-repeat bg-contain bg-shade-pattern'>
		<div className='mx-auto max-w-9/10'>{children}</div>
	</main>
)

export default CharacterDetailsLayout
