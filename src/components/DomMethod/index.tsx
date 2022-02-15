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
      <h1 ref={ref} className={`${isValid && 'fadeUpAnimation '}`}>
        MÉTODO <b>DOM</b>
      </h1>
      <main>
        <div>
          <h2 className={`${isValid && 'fadeBottomAnimation '}`}>
            D <b>ominar </b>
          </h2>
          <p className={`${isValid && 'fadeBottomAnimation '}`}>
            Conquistar território, liderar seu segmento de mercado, torna-se
            conhecido através da gestão de anúncios estratégicos e recursos
            audiovisuais que prendem a atenção e vendem mais;
          </p>
        </div>

        <div>
          <h2 className={`${isValid && 'fadeBottomAnimation '}`}>
            O <b>timizar </b>
          </h2>
          <p className={`${isValid && 'fadeBottomAnimation '}`}>
            Aplicar gestão aos processos, foco no que realmente importa, redução
            de custos não relevantes fazendo mais com menos;
          </p>
        </div>
        <div>
          <h2 className={`${isValid && 'fadeBottomAnimation '}`}>
            M <b>etrificar </b>
          </h2>
          <p className={`${isValid && 'fadeBottomAnimation '}`}>
            Tentar gerenciar sem informação é como pilotar em meio a neblina sem
            GPS. Para que os processos sejam melhorados a empresa deve perseguir
            indicadores de performance (KPIs).
          </p>
        </div>
      </main>
    </section>
  )
}

export default DomMethod
