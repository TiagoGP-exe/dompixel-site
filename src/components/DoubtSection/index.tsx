import { RiCheckboxCircleFill } from 'react-icons/ri'
import styles from './styles.module.scss'
import React from 'react'

const wordsOfMarketing = [
  'Marketing em boas mãos',
  'Métodos assertivos de prospecção e de fechamento de vendas',
  'Aumento do Market Share da sua empresa',
  'Aumento do seu NPS',
  'Controle dos números do seu investimento',
  'Proatividade e agilidade da DOM',
  'Melhora na tomada de decisões com números precisos',
]

const DoubtSection = () => (
  <section className={styles.DoubtSectionContainer}>
    <h1>
      Ainda com dúvida? <br /> Veja como a DOM vai potencializar o seu negócio
    </h1>
    <main>
      <div>
        <p>
          É natural sentir-se inseguro com tantas promessas, principalmente se
          você já passou por experiências frustrantes. Mas a verdade é que para
          determinar o sucesso do seu projeto, são necessários alguns
          pré-requisitos. <br />
          <br /> Se de alguma forma não pudermos contribuir com seu sucesso,
          seremos transparentes em nosso diagnóstico.
        </p>
      </div>
      <div>
        {wordsOfMarketing.map(word => (
          <aside key={word}>
            <RiCheckboxCircleFill size={32} color=' var(--primary-color)' />
            <p>{word}</p>
          </aside>
        ))}
      </div>
    </main>
  </section>
)

export default DoubtSection
