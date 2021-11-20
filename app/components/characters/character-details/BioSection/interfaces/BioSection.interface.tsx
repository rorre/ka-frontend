import { SetStateAction, Dispatch } from 'react'

import { DetailedStudent } from '../../interfaces'

export interface BioSectionInterface {
	student: DetailedStudent
	showVideo: boolean
	setShowVideo: Dispatch<SetStateAction<boolean>>
}
