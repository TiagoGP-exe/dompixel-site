import Image from 'next/image'
import React, { FC } from 'react'
import styles from './styles.module.scss'

interface StoreButtonProps {
  type: 'android' | 'ios'
}

const StoreButton: FC<StoreButtonProps> = ({ type }) => (
  <div className={styles.buttons}>
    {type === 'android' ? (
      <Image layout='fill' src='/assets/google-play.svg' />
    ) : (
      <Image layout='fill' src='/assets/app-store.svg' />
    )}
  </div>
)

export default StoreButton
