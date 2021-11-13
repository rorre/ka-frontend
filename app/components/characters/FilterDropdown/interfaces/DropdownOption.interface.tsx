import React from 'react'

export interface DropdownOptionInterface {
	house: string
	checked: boolean
	filters?: string[]
	className?: string
	filterHandler: Function
	setCondition: React.Dispatch<React.SetStateAction<boolean>>
}
