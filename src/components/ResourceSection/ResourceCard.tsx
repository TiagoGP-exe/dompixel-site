import React, { FC } from 'react'
import { AboutCardProps } from '../AboutSection/AboutCard'
import styles from './styles.module.scss'
import { HiUserCircle } from 'react-icons/hi'

interface ResourceCardProps extends AboutCardProps {
  isReverse: boolean
}

const initialTitle = 'Gestão Catequética'
const initialDescription =
  'Interação e administração completa dos grupos, pastorais e catequeses.'

const ResourceCard: FC<ResourceCardProps> = ({
  title,
  description,
  isReverse,
}) => (
  <div
    className={`${styles.ResourceCardContainer} ${
      isReverse && styles.reverseContentResource
    } `}
  >
    <div className={` ${isReverse && styles.reverseTextResource} `}>
      <h3>{title || initialTitle}</h3>
      <p>{description || initialDescription}</p>
    </div>
    <HiUserCircle size={48} />
  </div>
)

export default ResourceCard
