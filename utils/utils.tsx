import React from 'react'
import * as House from '../components/yearbook/house-icons'

export const getHouseIcon = (house: string) => {
	switch (house) {
		case 'Action':
			return <House.ActionIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Animation':
			return <House.AnimationIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Apocalypse':
			return <House.ApocalypseIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Comedy':
			return <House.ComedyIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Fantasy':
			return <House.FantasyIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Historical':
			return <House.HistoricalIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Horror':
			return <House.HorrorIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Musical':
			return <House.MusicalIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Mystery':
			return <House.MysteryIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Romance':
			return <House.RomanceIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Space':
			return <House.SpaceIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		case 'Superhero':
			return <House.SuperheroIcon width='md:w-8 w-12' height='md:h-8 h-11' />

		default:
			return <House.ActionIcon width='md:w-8 w-12' height='md:h-8 h-11' />
	}
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

	if (studentSplittedName.length >= 3) {
		const firstName = studentSplittedName[0]
		const secondName = studentSplittedName[1]
		const firstLetterOfThirdName = `${studentSplittedName[2][0]}`

		if (firstLetterOfThirdName.endsWith('.'))
			return `${firstName} ${secondName} ${firstLetterOfThirdName}`
		else return `${firstName} ${secondName} ${firstLetterOfThirdName}.`
	} else {
		return studentSplittedName.join(' ')
	}
}
