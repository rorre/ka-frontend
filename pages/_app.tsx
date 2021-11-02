import React from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

/**
 * 描述
 * @date 2021-09-26
 * @param {any} {Component
 * @param {any} pageProps}:AppProps
 * @return {any}
 */
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
export default MyApp
