import { Dispatch, SetStateAction } from 'react'
import { DetailedStudent } from '../../interfaces'

export interface VideoModalInterface {
	nama: DetailedStudent['nama']
	jurusan: DetailedStudent['jurusan']
	video_diri: DetailedStudent['video_diri']
	className?: string
	foto_diri: DetailedStudent['foto_diri']
	showVideo: boolean
	setShowVideo: Dispatch<SetStateAction<boolean>>
}
