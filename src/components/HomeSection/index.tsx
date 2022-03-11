import Link from 'next/link'
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
            Encontre seus potenciais clientes <br /> e escale suas <b>vendas</b>
          </p>

          <Link href='https://bit.ly/dompixelagencia'>
            <a>
              <button className={`blue-button glowAnimation`}>
                QUERO AJUDA PROFISSIONAL
              </button>
            </a>
          </Link>
        </div>
      </main>
    </section>
  )
}

export default HomeSection
