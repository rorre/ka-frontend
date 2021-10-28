import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GetToKnowUs from '../components/gtku/GetToKnowUs'

const Home = () => {
	return (
		<div>
			<Head>
				<title>CSUI 2021</title>
				<meta name='description' content='Karya Angkatan CSUI 2021' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex flex-col h-screen text-white text-center items-center justify-center'>
				<h2>INTRODUCING</h2>
				<h1 className='text-9xl'>
					CSUI<br></br>2021
				</h1>
			</div>
			<div className={styles.main}>
				<GetToKnowUs />
			</div>

			{/* <footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer> */}
		</div>
	)
}

export default Home
