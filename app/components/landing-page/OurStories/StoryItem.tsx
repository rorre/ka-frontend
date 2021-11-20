import React, { useState, useEffect } from 'react'
import { Story } from '../styles'
import { StoryItemInterface } from './interfaces/StoryItem.interface'

const StoryItem = ({
	foto,
	id,
	detail,
	title,
	isClickedGlobal,
	setDetails,
	setTitles,
	setIsClickedGlobal,
}: StoryItemInterface) => {
	const [isClicked, setIsClicked] = useState(true)
	const [imageIndex, setImageIndex] = useState(0)
	const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + `/assets/story`

	const clickHandler = () => {
		if (isClicked && imageIndex < foto.length - 1) {
			setIsClicked(isClicked)
			setIsClickedGlobal(id)
		} else {
			setIsClicked(!isClicked)
			setIsClickedGlobal(id)
		}
		let tmp = imageIndex
		tmp++
		setImageIndex(tmp % foto.length)
	}

	useEffect(() => {
		if (isClickedGlobal === id && isClicked === true) {
			setTitles(title)
			setDetails(detail)
		}
		const interval = setInterval(() => {
			if (isClickedGlobal === id && isClicked === true) {
				let tmp = imageIndex
				tmp++
				setImageIndex(tmp % foto.length)
			}
		}, 5000)
		return () => clearInterval(interval)
	})
	return (
		<Story
			src={`${imageUrl}/${foto[imageIndex]}`}
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
