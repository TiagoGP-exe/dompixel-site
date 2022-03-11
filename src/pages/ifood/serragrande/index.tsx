import { useEffect } from 'react'
import styles from './styles.module.scss'

const Serragrande = () => {
  useEffect(() => {
    ;(() => {
      let time

      const desktopFallback =
          'https://www.ifood.com.br/delivery/cuiaba-mt/serra-grande-a-casa-da-cerveja-morada-do-ouro/98873ec5-eb1f-4dff-840f-5c9fa40adf94',
        mobileFallback =
          'https://www.ifood.com.br/delivery/cuiaba-mt/serra-grande-a-casa-da-cerveja-morada-do-ouro/98873ec5-eb1f-4dff-840f-5c9fa40adf94',
        app =
          'intent://www.ifood.com.br/delivery/cuiaba-mt/serra-grande-a-casa-da-cerveja-morada-do-ouro/98873ec5-eb1f-4dff-840f-5c9fa40adf94#Intent;package=br.com.brainweb.ifood;scheme=https;end',
        appIos = 'ifood://restaurant/98873ec5-eb1f-4dff-840f-5c9fa40adf94'

      if (/Android/i.test(navigator.userAgent)) {
        window?.location = app
        time = setTimeout(() => {
          window?.location = mobileFallback
        }, 1000)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window?.location = appIos
        time = setTimeout(() => {
          window?.location = mobileFallback
        }, 1000)
      } else {
        window?.location = desktopFallback
      }

      return () => clearTimeout(time)
    })()
  }, [])

  return (
    <div className={styles.ContainerSerraGrande}>
      <div className={styles.loader} />
    </div>
  )
}

export default Serragrande
