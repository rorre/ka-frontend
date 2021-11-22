import type { AppProps } from 'next/app'
import { NextPageWithLayoutInterface } from './NextPageWithLayout.interface'

export type AppPropsWithLayoutInterface = AppProps & {
	Component: NextPageWithLayoutInterface
}
