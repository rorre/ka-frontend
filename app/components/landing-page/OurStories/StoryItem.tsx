import React, { useState } from 'react'
import { Story } from '../styles'
import { StoryProps } from './interfaces/StoryProps.interface'

const StoryItem = ({ foto, id, setDetails }: StoryProps) => {
	const [isClicked, setIsClicked] = useState(false)
	const [imageIndex, setImageIndex] = useState(0)
	const clickHandler = () => {
		setIsClicked(!isClicked)
		setDetails()
		let tmp = imageIndex
		tmp++
		setImageIndex(tmp % foto.length)
	}
	return (
		<Story
			src={foto[imageIndex]}
			id={id}
			className={`transform ${
				isClicked ? 'scale-110 mx-6' : 'hover:scale-105'
			}`}
			onClick={clickHandler}
		/>
	)
}

export default StoryItem
