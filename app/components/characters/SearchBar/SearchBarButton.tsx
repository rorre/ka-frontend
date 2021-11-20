import React from 'react'
import { SearchButton } from './styles'

export const SearchBarButton = () => (
	<SearchButton
		type='submit'
		className={`text-white hover:opacity-100 active:opacity-100 opacity-80 lg:w-2/12 md:w-2/12 w-3/12 inline-block md:py-3.5 py-2 text-center md:rounded-lg rounded md:text-base text-2xs`}>
		Search
	</SearchButton>
)
