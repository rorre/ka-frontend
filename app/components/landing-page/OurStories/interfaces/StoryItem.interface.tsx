export interface StoryItemInterface {
	id: number
	title: string
	detail: string
	foto: Array<string>
	isClickedGlobal: number
	setDetails: React.Dispatch<React.SetStateAction<string>>
	setTitles: React.Dispatch<React.SetStateAction<string>>
	setIsClickedGlobal: React.Dispatch<React.SetStateAction<number>>
}
