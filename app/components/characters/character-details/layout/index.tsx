import React, { ReactNode } from 'react'
import Header from '../../../global/header'
import { BlueCorner, RedCorner } from './styles'

type LayoutProps = {
	children: ReactNode
}

const CharacterDetailsLayout = ({ children }: LayoutProps) => (
	<main>
		<Header />
		<div className='mx-auto'>
			{children}
			<BlueCorner />
			<RedCorner />
		</div>
	</main>
)

export default CharacterDetailsLayout
