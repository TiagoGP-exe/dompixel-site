import styles from './styles.module.scss'
import React from 'react'
import TeamCard, { TeamCardProps } from './TeamCard'

const numberOfCards: TeamCardProps[] = [
  {
    name: 'Luiz Gustavo',
    description: 'Key Account Manager',
  },
  {
    name: 'Flávio Costa',
    description: 'Filmaker & Photographer',
  },
  {
    name: 'João Lima',
    description: 'Designer',
  },
  {
    name: 'Juniel Filappi',
    description: 'Devops e Full Stack',
  },
  {
    name: 'Danielly Cristina',
    description: 'UX/UI e Web Designer',
  },
  {
    name: 'Jean Rodrigo',
    description: 'Back-End Developer',
  },
  {
    name: 'Tiago Guimarães',
    description: 'Front-End Developer',
  },
  {
    name: 'Anderson Caparróz',
    description: 'CEO & Founder',
  },
]

const TeamSection = () => {
  return (
    <section id='Team' className={styles.TeamContainer}>
      <h1>TIME</h1>

      <div>
        <main>
          {numberOfCards.map(({ name, description }) => (
            <TeamCard
              key={String(name)}
              name={name}
              description={description}
            />
          ))}
        </main>
      </div>
    </section>
  )
}

export default TeamSection
