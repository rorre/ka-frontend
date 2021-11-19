import { MouseEventHandler } from 'react'

export interface ButtonInterface {
	className?: string
	onClick: MouseEventHandler<HTMLButtonElement>
}
