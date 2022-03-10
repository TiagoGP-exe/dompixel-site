import styles from './styles.module.scss'
import React, { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

const YouDoing = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <section id='testimonial' className={styles.TestimonialContainer}>
      <h1 ref={ref} className={`${isValid && 'fadeBottomAnimation '}`}>
        Empresas que <b>confiam</b> no nosso trabalho
      </h1>

      <main>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/niDwxtMX3YE'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          className={`${isValid && 'fadeUpAnimation'}`}
        ></iframe>
      </main>
    </section>
  )
}
export default YouDoing
