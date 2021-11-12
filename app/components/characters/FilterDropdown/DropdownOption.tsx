import React from 'react'
import { StyledCheckbox } from './styles'

export const DropdownOption = ({
	house,
	checked,
	filters,
	className = '',
	filterHandler,
	setCondition,
}: {
	house: string
	checked: boolean
	filters?: string[]
	className?: string
	filterHandler: Function
	setCondition: React.Dispatch<React.SetStateAction<boolean>>
}) => (
	<button
		type='button'
		onClick={() => filterHandler(checked, setCondition)}
		className={`relative text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full md:px-5 py-2 px-3 md:text-sm lg:text-base text-2xs border-dark-2 ${className}`}>
		{house}
		<StyledCheckbox
			onChange={() => filterHandler(checked, setCondition)}
			type='checkbox'
			className='absolute md:right-4 right-2 md:top-3.5 top-2.5'
			checked={checked}
			name='filters'
			value={house}
		/>
	</button>
)
