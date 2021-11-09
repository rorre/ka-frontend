import React, { ReactElement } from 'react'

const Container = ({
	children,
}: {
	children: ReactElement[] | ReactElement
}) => {
	return <div className='lg:p-40 p-10 z-10'>{children}</div>
}

export default Container
