import React from 'react'
import { StyledCheckbox } from './styles'
import { DropdownOptionInterface } from './interfaces/DropdownOption.interface'

export const DropdownOption = ({
	house,
	checked,
	filters,
	className = '',
	filterHandler,
	setCondition,
}: DropdownOptionInterface) => (
	<button
		type='button'
		onClick={() => filterHandler(checked, setCondition)}
		className={`relative text-left bg-purple hover:bg-dark-2 text-gray-400 w-full md:px-5 py-2 px-2 md:text-sm lg:text-base text-1.5xs border-dark-2 ${className}`}>
		{house}
		<StyledCheckbox
			onChange={() => filterHandler(checked, setCondition)}
			type='checkbox'
			className='absolute md:right-4 right-2 md:top-3.5 top-2.5'
			checked={checked}
			name='house'
			value={house}
		/>
	</button>
)
