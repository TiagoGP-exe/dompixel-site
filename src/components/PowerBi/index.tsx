import styles from './styles.module.scss'
import React from 'react'
import Link from 'next/link'

const PowerBi = () => (
  <section className={styles.ContainerPowerBi}>
    <main>
      <div>
        <h1>Power BI e Data Studio</h1>
        <p>
          É importante assegurar que as métricas rastreadas avaliem seus
          resultados comerciais. Interações como curtidas, compartilhamentos e
          comentários podem ser úteis em alguns casos, mas não são indicadores
          de sucesso. Considere os resultados comerciais reais que geram lucro:
          <b> as vendas.</b>
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
      <Link href='https://bit.ly/dompixelagencia'>
        <a>
          <button className={`blue-button glowAnimation`}>
            QUERO AJUDA PROFISSIONAL
          </button>
        </a>
      </Link>
    </main>
  </section>
)

export default PowerBi
