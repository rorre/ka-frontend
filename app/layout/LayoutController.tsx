import React from 'react'
import Layout from '.'
import { LayoutControllerInterface } from './interfaces/LayoutController.interface'

const LayoutController = ({
	Component,
	children,
}: LayoutControllerInterface) => {
	const getLayout = Component.getLayout ?? (page => page)

	return getLayout !== Component.getLayout ? (
		<Layout> {children} </Layout>
	) : (
		<>{children}</>
	)
}

export default LayoutController
