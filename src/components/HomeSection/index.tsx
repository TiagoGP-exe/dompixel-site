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
        <div>
          <h1 className={`${isValid && 'fadeBottomAnimation '}`}>
            VENDA MAIS <br /> COM A PARCERIA <br /> ESTRATÉGICA DA <b>DOM</b>
          </h1>
          <p className={`${isValid && 'fadeUpAnimation '}`}>
            Se conecte com seus potenciais clientes e escale suas
            <b> vendas. </b>
          </p>
        </div>

        <button
          onClick={() => router.push('#about')}
          className={`blue-button  ${
            isValid && 'fadeUpAnimation glowAnimation'
          }`}
        >
          QUERO VENDER MAIS
        </button>
      </main>
    </section>
  )
}

export default HomeSection
