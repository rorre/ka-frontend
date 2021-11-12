export interface StoryProps {
	foto: Array<string>
	id: number
	detail: string
	setDetails: React.Dispatch<React.SetStateAction<string>>
	setIsClickedGlobal: React.Dispatch<React.SetStateAction<boolean>>
	isClickedGlobal: boolean
}
