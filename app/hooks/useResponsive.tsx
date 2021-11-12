import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

export const useResponsive = () => {
	const [isClient, setIsClient] = useState(false)

	const isMobile = useMediaQuery({
		maxWidth: '640px',
	})

	const isTablet = useMediaQuery({
		minWidth: '768px',
	})

	const isDesktop = useMediaQuery({
		minWidth: '1024px',
	})

	useEffect(() => {
		if (typeof window !== 'undefined') setIsClient(true)
	}, [])

	return {
		isDesktop: isClient ? isDesktop : true,
		isTablet: isClient ? isTablet : false,
		isMobile: isClient ? isMobile : false,
	}
}
