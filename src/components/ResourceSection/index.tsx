import Image from 'next/image'
import React, { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import ResourceCard from './ResourceCard'
import styles from './styles.module.scss'

const numberOfCards = [1, 2, 3, 4]

const ResourceSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <section ref={ref} id='resource' className={styles.ResourceContainer}>
      <h1 className={`${isValid && 'fadeBottomAnimation '}`}>Recursos</h1>
      <p className={`${isValid && 'fadeUpAnimation'}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>

      <main>
        <section className={`${isValid && 'fadeLeftAnimation'}`}>
          {numberOfCards.map(item => (
            <ResourceCard key={String(item)} isReverse={false} />
          ))}
        </section>
        <aside
          style={{ zIndex: 10 }}
          className={`${isValid && 'fadeUpAnimation'}`}
        >
          <Image layout='fill' src='/assets/iPhone11.svg' />
        </aside>
        <section className={`${isValid && ' fadeRightAnimation '}`}>
          {numberOfCards.map(item => (
            <ResourceCard key={String(item)} isReverse={true} />
          ))}
        </section>
      </main>
    </section>
  )
}

export default ResourceSection
