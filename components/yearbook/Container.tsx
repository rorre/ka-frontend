import React, { ReactElement } from 'react'

const Container = ({
	children,
}: {
	children: ReactElement[] | ReactElement
}) => {
	return <div className='container mx-auto px-10'>{children}</div>
}

export default Container
