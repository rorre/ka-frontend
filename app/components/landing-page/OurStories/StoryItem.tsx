import React, { useState } from 'react'
import { Story } from '../styles'
import { StoryItemInterface } from './interfaces/StoryItem.interface'

const StoryItem = ({
	foto,
	id,
	detail,
	title,
	setDetails,
	setTitles,
	setIsClickedGlobal,
	isClickedGlobal,
}: StoryItemInterface) => {
	const [isClicked, setIsClicked] = useState(false)
	const [imageIndex, setImageIndex] = useState(0)
	const clickHandler = () => {
		if (isClicked && imageIndex < foto.length - 1) {
			setIsClicked(isClicked)
			setIsClickedGlobal(id)
		} else {
			setIsClicked(!isClicked)
			setIsClickedGlobal(id)
		}
		setDetails(detail)
		setTitles(title)
		let tmp = imageIndex
		tmp++
		setImageIndex(tmp % foto.length)
		console.log(isClicked, isClickedGlobal, imageIndex)
	}
	return (
		<Story
			src={foto[imageIndex]}
			key={id}
			className={`transform ${
				isClicked && isClickedGlobal === id
					? 'scale-110 mx-6'
					: 'hover:scale-105'
			}`}
			onClick={clickHandler}
		/>
	)
}

export default StoryItem
