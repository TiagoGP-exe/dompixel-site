import React, { useEffect } from 'react'
import styles from './styles.module.scss'

const Dominun = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlSearchParams = new URLSearchParams(window.location.search)
      const params = Object.fromEntries(urlSearchParams.entries())

      console.log(params)
      const desktopFallback: any = 'https://dompixel.app/'
      const mobileFallback: any = [
        'https://play.google.com/store/apps/details?id=com.dompixel.dominun',
        'https://apps.apple.com/br/app/dominun/id1552500067',
      ]
      const app: any = `com.dompixel.dominun://?data=${params.data}`
      const appIos: any = `com.dompixel.dominun:/?data=${params.data}`

      if (/Android/i.test(navigator.userAgent)) {
        window.location = app
        setTimeout(() => {
          window.location = mobileFallback[0]
        }, 1000)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = appIos
        setTimeout(() => {
          window.location = mobileFallback[1]
        }, 3000)
      } else {
        window.location = desktopFallback
      }
    }
  }, [])

  return (
    <div className={styles.ContainerDominun}>
      <div className={styles.loader} />
    </div>
  )
}

export default Dominun
