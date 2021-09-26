import React from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * 描述
 * @date 2021-09-26
 * @param {any} {Component
 * @param {any} pageProps}:AppProps
 * @return {any}
 */
function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
export default MyApp
