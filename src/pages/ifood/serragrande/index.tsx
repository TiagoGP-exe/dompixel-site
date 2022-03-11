import { useEffect } from 'react'
import styles from './styles.module.scss'

const Serragrande = () => {
  useEffect(() => {
    ;(() => {
      if (typeof window !== 'undefined') {
        const desktopFallback: any =
          'https://www.ifood.com.br/delivery/cuiaba-mt/serra-grande-a-casa-da-cerveja-morada-do-ouro/98873ec5-eb1f-4dff-840f-5c9fa40adf94'
        const mobileFallback: any =
          'https://www.ifood.com.br/delivery/cuiaba-mt/serra-grande-a-casa-da-cerveja-morada-do-ouro/98873ec5-eb1f-4dff-840f-5c9fa40adf94'
        const app: any =
          'intent://www.ifood.com.br/delivery/cuiaba-mt/serra-grande-a-casa-da-cerveja-morada-do-ouro/98873ec5-eb1f-4dff-840f-5c9fa40adf94#Intent;package=br.com.brainweb.ifood;scheme=https;end'
        const appIos: any =
          'ifood://restaurant/98873ec5-eb1f-4dff-840f-5c9fa40adf94'

        if (/Android/i.test(navigator.userAgent)) {
          window.location = app
          setTimeout(() => {
            window.location = mobileFallback
          }, 1000)
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = appIos
          setTimeout(() => {
            window.location = mobileFallback
          }, 1000)
        } else {
          window.location = desktopFallback
        }
      }
    })()
  }, [])

  return (
    <div className={styles.ContainerSerraGrande}>
      <div className={styles.loader} />
    </div>
  )
}

export default Serragrande
