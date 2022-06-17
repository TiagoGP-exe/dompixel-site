/* eslint @typescript-eslint/no-extra-semi: 0 */

import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC, useEffect } from 'react'
import '../../styles/globals.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const FB_PIXEL = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

  useEffect(() => {
    ;(async () => {
      if (!FB_PIXEL) return
      const { default: ReactPixel } = await import('react-facebook-pixel')
      ReactPixel.init(FB_PIXEL, undefined, {
        autoConfig: true,
        debug: true,
      })
      ReactPixel.pageView()
      ReactPixel.track('ViewContent')
    })()
  }, [])

  return (
    <>
      <Head>
        <title>DOMPIXEL - GROWTH MARKETING</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Poppins:wght@300;400;600&display=swap`}
          rel='stylesheet'
        />

        <link rel='icon' href='/favicon.png' />

        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta
          name='description'
          content='Somos uma assessoria completa e possuímos a maior diversidade de skills do mercado. Não visamos apenas uma publicidade que gera curtidas e comentários, mas sim aquela que vende.'
        />
        <link rel='canonical' href='https://dompixel.com/' />
        <meta property='og:locale' content='pt_BR' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='A parceria estratégica que você precisa para fazer o seu negócio vender mais.'
        />
        <meta
          property='og:description'
          content='Somos uma assessoria completa e possuímos a maior diversidade de skills do mercado. Não visamos apenas uma publicidade que gera curtidas e comentários, mas sim aquela que vende.'
        />
        <meta property='og:url' content='https://dompixel.com/' />
        <meta property='og:site_name' content='DOMPIXEL - GROWTH MARKETING' />
        <meta
          property='article:publisher'
          content='https://facebook.com/agenciadompixel'
        />
        <meta
          property='article:modified_time'
          content='2022-02-25T14:31:16+00:00'
        />
        <meta
          property='og:image'
          itemProp='image'
          content='https://dompixel.com/bg-og-image.png'
        />
        <meta
          property='og:image:alt'
          content='DOMPIXEL - GROWTH MARKETING'
        ></meta>
        <meta property='og:image:type' content='image/png'></meta>
        <meta
          name='facebook-domain-verification'
          content='lntvm4yf4g1cacju5dmo70rshlxn40'
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
