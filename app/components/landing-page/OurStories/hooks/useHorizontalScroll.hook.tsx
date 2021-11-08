import { useRef, useEffect } from 'react'

export const useHorizontalScroll = () => {
	const elRef = useRef<HTMLDivElement | any>(null)
	function preventDefault(e: any) {
		e.preventDefault()
	}
	useEffect(() => {
		const el = elRef.current
		if (el) {
			const onWheel = (e: any) => {
				if (e.deltaY == 0) return
				// e.preventDefault()
				preventDefault(e)
				;(el as HTMLElement).scrollTo({
					left: (el as HTMLElement).scrollLeft + e.deltaY,
					behavior: 'smooth',
				})
			}
			;(el as HTMLElement)?.addEventListener('wheel', onWheel)
			return () => (el as HTMLElement).removeEventListener('wheel', onWheel)
		}
	}, [])
	return elRef
}
