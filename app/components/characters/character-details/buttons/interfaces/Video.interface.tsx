import { MouseEventHandler } from 'react'

export interface VideoInterface {
	className?: string
	onClick: MouseEventHandler<HTMLButtonElement>
}
