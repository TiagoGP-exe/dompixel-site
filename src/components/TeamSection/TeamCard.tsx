import React, { FC, useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import { removeAccents } from '../../utils/string'
import styles from './styles.module.scss'

export interface TeamCardProps {
  name: string
  description: string
}

const TeamCard: FC<TeamCardProps> = ({ name, description }) => {
  const indexImage = name.indexOf(' ')
  const correctImage = removeAccents(name).slice(0, indexImage).toLowerCase()

  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0,
  })

  const isValid = entry?.isIntersecting

  return (
    <div
      ref={ref}
      className={` ${styles.TeamCardContainer} ${isValid && 'fadeUpAnimation'}`}
    >
      <header>
        <img src={`/assets/people/${correctImage}.png`} alt={correctImage} />
      </header>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default TeamCard
