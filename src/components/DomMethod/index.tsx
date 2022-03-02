import React, { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import styles from './styles.module.scss'

const DomMethod = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <section id='domMethod' className={styles.DomMethodContainer}>
      <h1 ref={ref} className={`${isValid && 'fadeBottomAnimation '}`}>
        MÉTODO <b>DOM</b>
      </h1>
      <main>
        <div>
          <h2 className={`${isValid && 'fadeBottomAnimation '}`}>
            D <b>ominar </b>
          </h2>
          <p className={`${isValid && 'fadeBottomAnimation '}`}>
            Conquistar território; liderar seu segmento de mercado; tornar-se
            conhecido através da gestão de anúncios estratégicos e recursos
            audiovisuais que prendam a atenção e vendam mais.
          </p>
        </div>

        <div>
          <h2 className={`${isValid && 'fadeBottomAnimation '}`}>
            O <b>timizar </b>
          </h2>
          <p className={`${isValid && 'fadeBottomAnimation '}`}>
            Aplicar gestão aos processos, focar no que realmente importa;
            reduzir custos não relevantes e aumentar a produtividade.
          </p>
        </div>
        <div>
          <h2 className={`${isValid && 'fadeBottomAnimation '}`}>
            M <b>etrificar </b>
          </h2>
          <p className={`${isValid && 'fadeBottomAnimation '}`}>
            Perseguir indicadores de performance (KPIs), para acessar
            informações e melhorar os processos.
          </p>
        </div>
      </main>
    </section>
  )
}

export default DomMethod
