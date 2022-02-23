import React, { FC, useRef } from 'react'
import styles from './styles.module.scss'
import { HiUserCircle } from 'react-icons/hi'
import { useIntersectionObserver } from 'usehooks-ts'

export interface AboutCardProps {
  title?: string
  description?: string
}

const initialTitle = 'Gestão Catequética'
const initialDescription =
  ' Interação e administração completa dos grupos, pastorais e catequeses.'

const AboutCard: FC<AboutCardProps> = ({ title, description }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <div
      ref={ref}
      className={`${styles.AboutCard} ${
        isValid && 'fadeUpAnimation  glowAnimation'
      }`}
    >
      <HiUserCircle size={72} style={{ marginBottom: 10 }} />
      <h3>{title || initialTitle}</h3>
      <p>{description || initialDescription}</p>
    </div>
  )
}

export default AboutCard
