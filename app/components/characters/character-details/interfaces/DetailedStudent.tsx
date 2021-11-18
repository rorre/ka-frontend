export default interface DetailedStudent {
	username?: string
	nama: string
	jurusan: string
	ttl: string
	hobi: string
	twitter?: string
	line: string
	instagram: string
	foto_diri: string
	video_diri?: null
	house?: { id: number; codename: string; nama: string }
	house_led?: null
	message?: string
	about?: string
	interests?: string[]
}
