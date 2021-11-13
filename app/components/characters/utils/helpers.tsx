import React from 'react'
import * as House from '../house-icons'

export const getHouseIcon = (house: string) => {
	switch (house) {
		case 'Action':
			return <House.ActionIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Animation':
			return <House.AnimationIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Apocalypse':
			return <House.ApocalypseIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Comedy':
			return <House.ComedyIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Fantasy':
			return <House.FantasyIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Historical':
			return <House.HistoricalIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Horror':
			return <House.HorrorIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Musical':
			return <House.MusicalIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Mystery':
			return <House.MysteryIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Romance':
			return <House.RomanceIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Space':
			return <House.SpaceIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		case 'Superhero':
			return <House.SuperheroIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />

		default:
			return <House.ActionIcon width='w-6 lg:w-9' height='h-6 lg:h-9' />
	}
}

const formatName = (name: string) => {
	const letters = name.split('')
	const firstLetter = letters[0].toUpperCase()
	const restOfName = letters.slice(1).join('').toLowerCase()
	return `${firstLetter}${restOfName}`
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
	]

	const studentSplittedName = name.split(' ')

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
		const firstLetterOfThirdName = `${studentSplittedName[2][0]}`

		if (firstLetterOfThirdName.endsWith('.'))
			return `${formatName(firstName)} ${formatName(
				secondName
			)} ${firstLetterOfThirdName}`
		else
			return `${formatName(firstName)} ${formatName(
				secondName
			)} ${firstLetterOfThirdName}.`
	} else {
		return formatName(firstName)
	}
}
