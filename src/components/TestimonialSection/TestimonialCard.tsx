import styles from './styles.module.scss'
import React, { FC, useRef } from 'react'
import Image from 'next/image'
import { useIntersectionObserver } from 'usehooks-ts'

interface TestimonialCardProps {
  title: string
  items: string[]
  img?: string
}

const TestimonialCard: FC<TestimonialCardProps> = ({ title, items, img }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <div
      ref={ref}
      className={`${styles.TestimonialCardContainer} ${
        isValid && 'fadeUpAnimation'
      }`}
    >
      <header>
        <Image layout='fill' src={`/assets/${img}`} />
      </header>
      <h3>{title}</h3>
      {items.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}
export default TestimonialCard
