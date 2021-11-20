import React from 'react'
import * as House from '../house-icons'

export const getHouseIcon = (house?: string, classname = '') => {
	const defaultIconHeight = classname === '' ? 'h-6 lg:h-9' : classname
	const defaultIconWidth = classname === '' ? 'w-6 lg:w-9' : ''

	switch (house) {
		case 'Action':
			return (
				<House.ActionIcon width={defaultIconWidth} height={defaultIconHeight} />
			)

		case 'Animation':
			return (
				<House.AnimationIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		case 'Apocalypse':
			return (
				<House.ApocalypseIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		case 'Comedy':
			return (
				<House.ComedyIcon width={defaultIconWidth} height={defaultIconHeight} />
			)

		case 'Fantasy':
			return (
				<House.FantasyIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		case 'Historical':
			return (
				<House.HistoricalIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		case 'Horror':
			return (
				<House.HorrorIcon width={defaultIconWidth} height={defaultIconHeight} />
			)

		case 'Musical':
			return (
				<House.MusicalIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		case 'Mystery':
			return (
				<House.MysteryIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		case 'Romance':
			return (
				<House.RomanceIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		case 'Space':
			return (
				<House.SpaceIcon width={defaultIconWidth} height={defaultIconHeight} />
			)

		case 'Superhero':
			return (
				<House.SuperheroIcon
					width={defaultIconWidth}
					height={defaultIconHeight}
				/>
			)

		default:
			return (
				<House.ActionIcon width={defaultIconWidth} height={defaultIconHeight} />
			)
	}
}

const formatName = (name: string) => {
	const letters = name.split('')
	const firstLetter = letters[0].toUpperCase()
	const restOfName = letters.slice(1).join('').toLowerCase()
	return `${firstLetter}${restOfName}`
}

export const formatNameForDetails = (name: string) => {
	const trimmedName = name.trim()
	const formattedNames: string[] = []

	for (let index = 0; index < trimmedName.split(' ').length; index++) {
		formattedNames.push(trimmedName.split(' ')[index])
	}

	const formattedName = formattedNames.join(' ')

	return formattedName
}

export const shortenName = (name: string) => {
	const variationsofMuhammad = [
		'muhammad',
		'mohammed',
		'mohammad',
		'muhammed',
		'mohamed',
		'mohamad',
		'muhamad',
		'muhamed',
		'mohamud',
		'mohummad',
		'mohummed',
		'mouhamed',
		'mohammod',
		'mouhamad',
		'mochamad',
	]

	const studentSplittedName = name.trim().split(' ')

	for (const index in studentSplittedName) {
		if (
			variationsofMuhammad.includes(studentSplittedName[index].toLowerCase())
		) {
			studentSplittedName[index] = 'M.'
		}
	}

	const firstName = studentSplittedName[0]

	if (studentSplittedName.length === 2) {
		const secondName = studentSplittedName[1]

		return `${formatName(firstName)} ${formatName(secondName)}`
	}

	if (studentSplittedName.length >= 3) {
		const secondName = studentSplittedName[1]
		const thirdName = studentSplittedName[2]

		if (firstName === 'M.' || secondName === 'M.') {
			return `${formatName(firstName)} ${formatName(secondName)} ${thirdName}`
		} else {
			const firstLetterOfThirdName = studentSplittedName[2][0]

			if (firstLetterOfThirdName.endsWith('.'))
				return `${formatName(firstName)} ${formatName(
					secondName
				)} ${firstLetterOfThirdName}`
			else
				return `${formatName(firstName)} ${formatName(
					secondName
				)} ${firstLetterOfThirdName}.`
		}
	} else {
		return formatName(firstName)
	}
}
