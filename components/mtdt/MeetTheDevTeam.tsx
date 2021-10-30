import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const DevCard = styled.div`
	position: absolute;
	width: 927px;
	height: 374px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: #1d1a27;
	border-radius: 20px;
	box-shadow: -30px 0 100px #164f85, 30px 0 100px #ab1818;
`

const MeetTheDevTeam = () => {
	return (
		<div className='h-screen flex items-center justify-center'>
			<Link href='/devteam'>
				<DevCard>
					<img
						src='/asset/image/mtdt-icon.svg'
						alt='Meet the Dev Team'
						className='mb-10'
					/>
					<h2>Meet the Dev Team</h2>
				</DevCard>
			</Link>
		</div>
	)
}

export default MeetTheDevTeam
