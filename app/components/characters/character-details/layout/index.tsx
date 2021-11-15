import React, { ReactNode } from 'react'

type LayoutProps = {
	children: ReactNode
}

const CharacterDetailsLayout = ({ children }: LayoutProps) => (
	<main>
		<div className='mx-auto'>{children}</div>
	</main>
)

export default CharacterDetailsLayout
