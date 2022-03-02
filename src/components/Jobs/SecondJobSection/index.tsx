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
          No decorrer de 90 dias, conseguimos um ROAS médio de 2x, resultado das
          vendas diretas pelo WhatsApp. Além disso, desenvolvemos treinamento de
          vendas para impulsionar o comercial.
        </p>
      </div>

      <video autoPlay loop muted className={styles.video}>
        <source src='/assets/golfinho-azul.m4v' type='video/mp4' />
      </video>
    </section>
  )
}

export default SecondJobSection
