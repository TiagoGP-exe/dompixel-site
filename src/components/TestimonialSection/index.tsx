import styles from './styles.module.scss'
import React, { useRef } from 'react'
import TestimonialCard from './TestimonialCard'
import { useIntersectionObserver } from 'usehooks-ts'

const TestimonialInfos = [
  {
    title: 'Produtora',
    items: [
      'Gastronomia',
      'Retratos',
      'Ensaios',
      'Foto Publicitária',
      'Fotos Still / Produtos.',
    ],
    img: 'icons_prodution.svg',
  },
  {
    title: 'Assessoria de Marketing',
    items: [
      'Social media',
      'Tráfego',
      'Copy',
      'Estratégia',
      'Branding',
      'Business Intelligence.',
    ],
    img: 'icons_mkt.svg',
  },
  {
    title: 'Desenvolvimento Web e Mobile',
    items: [
      'Design e UX/UI',
      'Web Design',
      'Landing pages',
      'Implementação de loja virtual',
      'Aplicativos Android e IOs',
      'Integração com API REST',
      'Plataformas Dashbord.',
      'Power BI',
    ],
    img: 'icons_dev.svg',
  },
]

const TestionialSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <section ref={ref} id='testimonial' className={styles.TestimonialContainer}>
      <h1 className={`${isValid && 'fadeBottomAnimation '}`}>
        O que a DomPixel faz?
      </h1>
      {/* <p className={`${isValid && 'fadeUpAnimation '}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p> */}

      <main>
        {TestimonialInfos.map(({ items, img, title }) => (
          <TestimonialCard key={title} items={items} img={img} title={title} />
        ))}
      </main>
    </section>
  )
}
export default TestionialSection
