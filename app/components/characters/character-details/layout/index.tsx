import React, { ReactNode } from 'react'
import { BlueCorner, RedCorner } from './styles'

type LayoutProps = {
	children: ReactNode
}

const CharacterDetailsLayout = ({ children }: LayoutProps) => (
	<main>
		<div className='mx-auto'>
			{children}
			<BlueCorner />
			<RedCorner />
		</div>
	</main>
)

export default CharacterDetailsLayout
