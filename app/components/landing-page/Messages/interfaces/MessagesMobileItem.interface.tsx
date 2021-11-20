export interface MessagesMobileItemInterface {
	name: string
	position: string
	major: string
	image: string
	message: string
	index: number
	isClicked: number
	setIsClicked: React.Dispatch<React.SetStateAction<number>>
}
