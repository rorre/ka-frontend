export interface StoryItemInterface {
	foto: Array<string>
	id: number
	title: string
	detail: string
	setDetails: React.Dispatch<React.SetStateAction<string>>
	setTitles: React.Dispatch<React.SetStateAction<string>>
	setIsClickedGlobal: React.Dispatch<React.SetStateAction<number>>
	isClickedGlobal: number
}
