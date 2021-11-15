import React from 'react'
import styled from 'styled-components'
import MobileSIG from '../../app/components/sig/MobileSIG'
import DesktopSIG from '../../app/components/sig/DesktopSIG'

const GradientBackgroundRed = styled.div`
	position: fixed;
	top: 12rem;
	right: 0;
	width: 20%;
	height: 60vh;
	background: linear-gradient(162.58deg, #ab1818 0.93%, #e03838 109.38%);
	box-shadow: 10px 10px 10px rgba(242, 60, 60, 0.25);
	filter: blur(150px);
	transform: rotate(166.08deg);
`

const GradientBackgroundBlue = styled.div`
	position: fixed;
	top: 12rem;
	left: 0;
	width: 20%;
	height: 60vh;
	background: linear-gradient(316.49deg, #3958ce -17.19%, #164f85 103.21%);
	box-shadow: 10px 10px 10px rgba(242, 60, 60, 0.25);
	filter: blur(150px);
	transform: rotate(166.08deg);
`

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
