import React from 'react'
import MobileSIG from '../../app/components/sig/MobileSIG'
import DesktopSIG from '../../app/components/sig/DesktopSIG'
import GradientBackgroundRed from '../../app/components/sig/styles/GradientBackgroundRed'
import GradientBackgroundBlue from '../../app/components/sig/styles/GradientbackgroundBlue'

const PassionsPage = () => {
	return (
		<div className='w-full h-full'>
			<GradientBackgroundBlue />
			<GradientBackgroundRed />
			<div className='w-screen h-auto flex items-center justify-center mt-24'>
				<DesktopSIG />
				<MobileSIG />
			</div>
		</div>
	)
}

export default PassionsPage
