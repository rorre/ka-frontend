import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../app/styles/globals.css'
import Layout from '../app/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'

library.add(fab, fas, far)

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page)

	if (getLayout !== Component.getLayout)
		return (
			<Layout>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@600&family=Sora:wght@400;600;700&display=swap'
						rel='stylesheet'></link>
				</Head>
				<Component {...pageProps} />
			</Layout>
		)
	return getLayout(
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@600&family=Sora:wght@400;600;700&display=swap'
					rel='stylesheet'></link>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
