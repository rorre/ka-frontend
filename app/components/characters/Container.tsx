import React, { ReactElement } from 'react'

const Container = ({
	children,
}: {
	children: ReactElement[] | ReactElement
}) => {
	return <div className='z-10 p-5 lg:p-32 md:p-7'>{children}</div>
}

export default Container
