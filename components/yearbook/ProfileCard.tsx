import React from 'react'
import styled from 'styled-components'
import Student from './ts/interfaces/Student'
import * as Social from './social-media-icons'
import * as utils from '../../utils/utils'

const ProfileCard = ({ name, major, image, house }: Student) => {
	return (
		<StyledProfileCard className='bg-dark-4 py-2 pl-2 m-1.5 border-4 relative rounded-xl border-dark-2'>
			<article>
				<div className='flex bg-dark-4 border-dark-2'>
					<ProfilePictureContainer image={image} />
					<div className='flex-col w-7/12 ml-3 bg-dark-4 relative'>
						<div className='order-1 text-white text-sm md:ml-0 ml-2 mt-5 bg-dark-4 mr-1 mb-1'>
							{utils.shortenName(name)}
						</div>
						<div className='order-2 text-white md:ml-0 ml-2 font-extralight text-xs bg-dark-4 mr-1'>
							{major}
						</div>
						<div className='order-3 flex justify-start mt-1 bg-dark-4 md:mr-3 mr-1'>
							{utils.getHouseIcon(house)}
						</div>
						<div className='order-4 flex justify-end bg-dark-4 md:mt-3 mt-9 mr-1'>
							<Social.LineIcon width='md:w-7 w-12' height='md:h-7 h-11' />
							<Social.InstagramIcon width='md:h-7 w-12' height='md:h-7 h-11' />
						</div>
					</div>
				</div>
			</article>
		</StyledProfileCard>
	)
}

const StyledProfileCard = styled.div``

export default ProfileCard

const ProfilePictureContainer = ({ image }: { image: string }) => (
	<div className={`rounded-xl w-5/12 border-4 rounded-xl border-dark-2`}>
		<ProfilePicture className='h-full' src={image} alt='Profile-Image' />
	</div>
)

const ProfilePicture = styled.img`
	background: #dee6ee;
`
