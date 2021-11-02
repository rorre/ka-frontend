import React from 'react'
import styled from 'styled-components'
import Student from './ts/interfaces/Student'
import * as Social from './social-media-icons'
import * as utils from '../../utils/utils'

const ProfileCard = ({ name, major, image, house }: Student) => {
	return (
		<div className='bg-dark-4 py-2 pl-2 m-1.5 border-4 relative rounded-xl border-dark-2'>
			<UpperNotch />
			<article>
				<div className='flex divide-x-2 bg-dark-4 divide-dashed divide-dark-2 border-dark-2'>
					<ProfilePictureContainer image={image} />
					<div className='relative flex-col w-7/12 pl-3 ml-4 bg-dark-4'>
						<div className='order-1 mt-8 mb-1 ml-2 mr-1 text-sm text-white md:ml-0 md:mt-6 bg-dark-4'>
							{utils.shortenName(name)}
						</div>
						<div className='order-2 ml-2 mr-1 text-xs text-white md:ml-0 font-extralight bg-dark-4'>
							{major}
						</div>
						<div className='flex justify-start order-3 mt-1 mr-1 bg-dark-4 md:mr-3'>
							{utils.getHouseIcon(house)}
						</div>
						<div className='flex justify-end order-4 mt-6 mr-1 bg-dark-4 md:mt-0'>
							<Social.LineIcon width='md:w-7 w-10' height='md:h-7 h-10' />
							<Social.InstagramIcon width='md:h-7 w-10' height='md:h-7 h-10' />
						</div>
					</div>
				</div>
			</article>
			<LowerNotch />
		</div>
	)
}

const UpperNotch = styled.div`
	position: absolute;
	top: -4px;
	right: 42.8%;
	height: 2rem;
	width: 2.65rem;
	z-index: 1;
	background: #13111a;
	border-color: #302c3f;
	border-width: 0 4px 4px 4px;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	display: inline-block;

	@media screen and (max-width: 767px) {
		height: 2rem;
		width: 2.8rem;
		right: 45.5%;
	}
`
const LowerNotch = styled.div`
	position: absolute;
	bottom: -4px;
	right: 42.8%;
	height: 2rem;
	width: 2.65rem;
	z-index: 0;
	background-color: #13111a;
	border-color: #302c3f;
	border-width: 4px 4px 0 4px;
	border-top-right-radius: 50%;
	border-top-left-radius: 50%;
	display: inline-block;

	@media screen and (max-width: 767px) {
		height: 2rem;
		width: 2.8rem;
		right: 45.5%;
	}
`

export default ProfileCard

const ProfilePictureContainer = ({ image }: { image: string }) => (
	<div className='rounded-xl w-5/12 border-4 rounded-xl border-dark-2 mr-1.5'>
		<ProfilePicture className='h-full' src={image} alt='Profile-Image' />
	</div>
)

const ProfilePicture = styled.img`
	background: #dee6ee;
`
