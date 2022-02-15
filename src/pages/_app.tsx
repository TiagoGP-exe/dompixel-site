import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import '../../styles/globals.scss'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Dominun</title>
        <meta name='description' content='Dominun' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Poppins:wght@300;400;600&display=swap`}
          rel='stylesheet'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
