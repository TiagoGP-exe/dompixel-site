import { FC } from 'react'
import { removeAccents } from '../../utils/string'
import styles from './styles.module.scss'

export interface TeamCardProps {
  name: string
  description: string
}

const TeamCard: FC<TeamCardProps> = ({ name, description }) => {
  const indexImage = name.indexOf(' ')
  const correctImage = removeAccents(name).slice(0, indexImage).toLowerCase()

  return (
    <div className={` ${styles.TeamCardContainer}`}>
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
