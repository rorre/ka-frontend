import { NextPage } from 'next'
import { ReactElement } from 'react'

export type NextPageWithLayoutInterface = NextPage & {
	getLayout?: (page: ReactElement) => ReactElement
}
