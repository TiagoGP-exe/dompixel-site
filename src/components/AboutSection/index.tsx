import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import styles from './styles.module.scss'

// const numberOfCards = [1, 2, 3, 4, 5]

const AboutSection = () => {
  const route = useRouter()
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <section id='about' className={styles.AboutSectionContainer}>
      <div ref={ref} className={styles.AboutSectionContent}>
        <h1 className={`${isValid && 'fadeBottomAnimation '}`}>
          A parceria estratégica que você precisa para fazer o seu negócio{' '}
          <span className={`customizeHighlight ${isValid && ' HighlightTrue'}`}>
            vender mais.
          </span>
        </h1>
        <p className={`${isValid && 'fadeUpAnimation '}`}>
          Somos uma assessoria completa e possuímos a maior diversidade de
          skills do mercado. Não visamos apenas uma publicidade que gera
          curtidas e comentários, mas sim aquela que vende.
        </p>

        <p className={`${isValid && 'fadeUpAnimation '}`}>
          Acreditamos que marketing só é marketing quando vende algo, para que
          isso seja possível, nós nos envolvemos estrategicamente na operação
          dos nossos clientes, desde o treinamento da equipe de atendimento até
          a consultoria de pós-venda.
        </p>
      </div>

      <button
        onClick={() => route.push('#domMethod')}
        className={`blue-button  ${
          isValid && 'fadeBottomAnimation'
        } glowAnimation`}
      >
        MÉTODO DOM
      </button>
    </section>
  )
}

export default AboutSection
