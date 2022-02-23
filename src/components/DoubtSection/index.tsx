import { useRouter } from 'next/router'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import styles from './styles.module.scss'

const wordsOfMarketing = [
  'Segurança para focar no seu negócio e deixar o marketing em boas mãos',
  'Tenha métodos assertivos de prospecção e de fechamento de vendas',
  'Aumente o market share da sua empresa',
  'Aumente o seu NPS',
  'Controle dos números do seu investimento',
  'Proatividade e agilidade da DOM',
  'Melhore a tomada de decisões com números precisos.',
]

const DoubtSection = () => (
  <section className={styles.DoubtSectionContainer}>
    <h1>
      Ainda com dúvida? <br /> Veja como a DOM vai potencializar o seu negócio
    </h1>
    <main>
      <div>
        <p>
          É natural sentir-se inseguro com tantas promessas, talvez você já
          tenha tido experiências frustrantes. Mas a verdade é que para
          determinar se seu projeto terá sucesso, são necessários alguns
          pré-requisitos. Nós da DomPixel vamos identificar se podemos ajudar a
          alavancar o seu negócio. Se de alguma forma não pudermos contribuir
          com seu sucesso, seremos transparentes em nosso diagnóstico.
        </p>
      </div>
      <div>
        {wordsOfMarketing.map(word => (
          <aside key={word}>
            <RiCheckboxCircleFill size={32} color='#027fe9' />
            <p>{word}</p>
          </aside>
        ))}
      </div>
    </main>
    <div />
  </section>
)

export default DoubtSection
