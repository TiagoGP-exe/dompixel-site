import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

const PowerBi = () => {
  return (
    <section className={styles.ContainerPowerBi}>
      <main>
        <div>
          <h1>Power BI e Data Studio</h1>
          <p>
            É importante garantir que as métricas rastreadas de fato mensurem os
            seus resultados comerciais. Ainda que as curtidas, os
            compartilhamentos e comentários sejam úteis em alguns casos, esses
            tipos de interação não necessariamente indicam sucesso. Em vez
            disso, considere os resultados comerciais reais, como vendas, que
            refletem o lucro
          </p>

          <button className={`blue-button glowAnimation`}>
            QUERO AJUDA PROFISSIONAL
          </button>
        </div>
        <div>
          <aside>
            <img src='/assets/mockup-power-bi.png' alt='dashboard' />
          </aside>
        </div>
      </main>
    </section>
  )
}

export default PowerBi
