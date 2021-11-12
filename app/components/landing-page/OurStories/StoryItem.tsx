import React, { useState } from 'react'
import { Story } from '../styles'
import { StoryProps } from './interfaces/StoryProps.interface'

const StoryItem = ({
	foto,
	id,
	detail,
	setDetails,
	setIsClickedGlobal,
	isClickedGlobal,
}: StoryProps) => {
	const [isClicked, setIsClicked] = useState(false)
	const [imageIndex, setImageIndex] = useState(0)
	const clickHandler = () => {
		setIsClicked(!isClicked)
		setIsClickedGlobal(!isClickedGlobal)
		console.log(isClicked)
		console.log(isClickedGlobal)
		setDetails(detail)
		let tmp = imageIndex
		tmp++
		setImageIndex(tmp % foto.length)
	}
	return (
		<Story
			src={foto[imageIndex]}
			key={id}
			className={`transform ${
				isClicked && isClickedGlobal ? 'scale-110 mx-6' : 'hover:scale-105'
			}`}
			onClick={clickHandler}
		/>
	)
}

export default StoryItem
