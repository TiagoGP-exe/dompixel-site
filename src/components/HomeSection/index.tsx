import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import styles from './styles.module.scss'

const HomeSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  const router = useRouter()

  return (
    <section ref={ref} id='home' className={styles.homeSectionContent}>
      <main>
        <img
          src='/assets/logo.svg'
          alt='asd'
          className={`${isValid && 'fadeBottomAnimation '}`}
        />

        <div>
          <h1 className={`${isValid && 'fadeBottomAnimation '}`}>
            VENDA MAIS <br /> COM A PARCERIA <br /> ESTRATÉGICA DA <b>DOM</b>
          </h1>
        </div>

        <div>
          <p className={`${isValid && 'fadeUpAnimation '}`}>
            Se conecte com seus potenciais <br /> clientes e escale suas
            <b> vendas. </b>
          </p>
          <button
            onClick={() => router.push('#about')}
            className={`blue-button  ${
              isValid && 'fadeUpAnimation glowAnimation'
            }`}
          >
            QUERO VENDER MAIS
          </button>
        </div>
      </main>
    </section>
  )
}

export default HomeSection
