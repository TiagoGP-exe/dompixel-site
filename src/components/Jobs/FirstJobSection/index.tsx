import React, { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import styles from './styles.module.scss'

const FirstJobSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <section ref={ref} className={styles.FirstJobSectionContainer}>
      <div>
        <h1 className={`${isValid && 'fadeRightAnimation '}`}>
          Aumento de <b>50%</b> <br /> dos resultados em <br />
          mídias pagas
        </h1>
        <p className={`${isValid && 'fadeRightAnimation '}`}>
          A casa de cervejas especiais que tem muita história para contar. O
          mestre cervejeiro Elvio Resende já colhe os frutos desta parceria que
          tem aumentado o engajamento dos seus clientes com novas estratégias e
          benefícios.
        </p>
      </div>
      <div>
        <img
          className={`${isValid && 'fadeUpAnimation '}`}
          src='/assets/serra-grande.png'
          alt='serra-grande'
        />
      </div>


      <video autoPlay loop muted className={styles.video}>
        <source src='/assets/serra-grande.m4v' type='video/mp4' />
      </video>
    </section>
  )
}

export default FirstJobSection
