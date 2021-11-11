import React, { ReactElement } from 'react'

const Container = ({
	children,
}: {
	children: ReactElement[] | ReactElement
}) => {
	return <div className='lg:p-40 md:p-10 p-5 z-10'>{children}</div>
}

export default Container
