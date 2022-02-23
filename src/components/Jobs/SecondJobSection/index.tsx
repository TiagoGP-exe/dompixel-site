import React, { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import styles from './styles.module.scss'

const SecondJobSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <section ref={ref} className={styles.SecondJobSectionContainer}>
      <div>
        <img
          className={`${isValid && 'fadeBottomAnimation '}`}
          src='/assets/golfinho-vetor.svg'
          alt='golfinho-azul'
        />
      </div>
      <div>
        <h1 className={`${isValid && 'fadeUpAnimation '}`}>
          mídias pagas Aumento de <b>100%</b> no ROAS médio
        </h1>
        <p className={`${isValid && 'fadeUpAnimation '}`}>
          Durante 90 dias conseguimos um ROAS médio de 2x no formato de venda
          direta pelo WhatsApp, ao longo do período desenvolvemos treinamentos
          de vendas para fortalecer o comercial. Foco total em vendas e um
          marketing totalmente regionalizado.
        </p>
      </div>

      <main />

      <video autoPlay loop muted className={styles.video}>
        <source src='/assets/golfinho-azul.m4v' type='video/mp4' />
      </video>
    </section>
  )
}

export default SecondJobSection
