import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
	filter: hue-rotate(135deg) brightness(0.8);
`

const StyledDropdown = styled.div`
	&::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 100vh;
		background-color: #13111a;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #5e5b71;
		border-radius: 100vh;
		border: 3px solid #edf2;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #5e5b71;
	}
`

const DropdownOption = ({
	house,
	checked,
	filters,
	className = '',
	filterHandler,
	setCondition,
}: {
	house: string
	checked: boolean
	filters: string[]
	className?: string
	filterHandler: Function
	setCondition: React.Dispatch<React.SetStateAction<boolean>>
}) => (
	<button
		type='button'
		onClick={() => filterHandler(checked, setCondition)}
		className={`relative text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full px-5 py-2 border-dark-2 ${className}`}>
		{house}
		<StyledCheckbox
			onChange={() => filterHandler(checked, setCondition)}
			type='checkbox'
			className='absolute right-4 top-3.5'
			checked={checked}
			name='filters'
			value={house}
		/>
	</button>
)

const FilterDropdown = () => {
	const [isDropdown, setIsDropdown] = useState(false)

	const [isActionChecked, setIsActionChecked] = useState(false)
	const [isAnimationChecked, setIsAnimationChecked] = useState(false)
	const [isApocalypseChecked, setIsApocalypseChecked] = useState(false)
	const [isComedyChecked, setIsComedyChecked] = useState(false)
	const [isFantasyChecked, setIsFantasyChecked] = useState(false)
	const [isHistoricalChecked, setIsHistoricalChecked] = useState(false)
	const [isHorrorChecked, setIsHorrorChecked] = useState(false)
	const [isMusicalChecked, setIsMusicalChecked] = useState(false)
	const [isMysteryChecked, setIsMysteryChecked] = useState(false)
	const [isRomanceChecked, setIsRomanceChecked] = useState(false)
	const [isSpaceChecked, setIsSpaceChecked] = useState(false)
	const [isSuperheroChecked, setIsSuperheroChecked] = useState(false)

	const [filters, setFilters] = useState([] as string[])

	const filterHandler = async (
		condition: boolean,
		setCondition: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		await setCondition(!condition)

		const checkedArray = document.querySelectorAll(
			'input[type=checkbox]:checked'
		)

		const newFilters = []

		for (let index = 0; index < checkedArray.length; index++) {
			newFilters.push(checkedArray[index].getAttribute('value') as string)
		}
		setFilters(newFilters)
	}

	const hasMounted = useRef(false)

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true
		} else {
			console.log(filters)
		}
	}, [filters])

	return (
		<div className='relative inline-block bg-dark-2 px-5 py-2.5 border-black rounded-xl lg:w-3/12 md:w-4/12 sm:w-full text-gray-400'>
			<div className='bg-dark-2'>
				<button
					onClick={() => setIsDropdown(!isDropdown)}
					type='button'
					className='inline-flex w-full text-gray-400'>
					<span className='w-11/12 text-left bg-dark-2'>Filter</span>
					<svg
						className={`w-1/12 absolute right-3.5 top-2.5 mt-1 bg-dark-2 ${
							isDropdown && 'transform rotate-180'
						}`}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='gray'
						aria-hidden='true'>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</div>
			<div>
				{isDropdown && (
					<StyledDropdown className='z-10 max-h-40 overflow-y-auto absolute w-full right-0 mt-4 text-gray-400 bg-dark-2 rounded-xl'>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Action'
							checked={isActionChecked}
							setCondition={setIsActionChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Animation'
							checked={isAnimationChecked}
							setCondition={setIsAnimationChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Apocalypse'
							checked={isApocalypseChecked}
							setCondition={setIsApocalypseChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Comedy'
							checked={isComedyChecked}
							setCondition={setIsComedyChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Fantasy'
							checked={isFantasyChecked}
							setCondition={setIsFantasyChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Historical'
							checked={isHistoricalChecked}
							setCondition={setIsHistoricalChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Horror'
							checked={isHorrorChecked}
							setCondition={setIsHorrorChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Musical'
							checked={isMusicalChecked}
							setCondition={setIsMusicalChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Mystery'
							checked={isMysteryChecked}
							setCondition={setIsMysteryChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Romance'
							checked={isRomanceChecked}
							setCondition={setIsRomanceChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Space'
							checked={isSpaceChecked}
							setCondition={setIsSpaceChecked}
						/>
						<DropdownOption
							filters={filters}
							filterHandler={filterHandler}
							house='Superhero'
							checked={isSuperheroChecked}
							setCondition={setIsSuperheroChecked}
						/>
					</StyledDropdown>
				)}
			</div>
		</div>
	)
}

export default FilterDropdown
