import React from 'react'

const LoginButton = () => {
	return (
		<div className='p-1 rounded-full w-max from-blue-dark to-red-dark bg-gradient-to-r group hover:bg-none'>
			<button className='py-3 font-semibold text-white rounded-full md:col-span-1 bg-dark-2 px-9 group-hover:bg-gradient-to-r from-blue-dark to-red-dark'>
				Login SSO
			</button>
		</div>
	)
}

export default LoginButton
