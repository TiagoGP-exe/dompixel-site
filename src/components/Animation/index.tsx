import { motion } from 'framer-motion'
import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Animation: FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
    }, 3500)
  }, [])

  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  }

  return (
    <>
      {isVisible && (
        <motion.div
          className={styles.bodyAnimation}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, ease: 'easeOut', duration: 1 }}
        >
          <div className={styles.containerAnimation}>
            <motion.svg
              initial={{ pathLength: 0 }}
              width='150'
              height='150'
              viewBox='0 0 150 150'
              fill='none'
              className={styles.item}
            >
              <motion.path
                variants={icon}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 3, ease: 'easeInOut' },
                  fill: { duration: 2.5, ease: [1, 0, 0.8, 1] },
                }}
                d='M75.0135 99.658L50.0111 124.829L75.0135 150L100.016 124.829L75.0135 99.658Z'
                fill='white'
              />
              <motion.path
                variants={icon}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 3, ease: 'easeInOut' },
                  fill: { duration: 2.5, ease: [1, 0, 0.8, 1] },
                }}
                d='M75.0256 56.3398L57.0128 74.4744L75.0256 92.6089L93.0384 74.4744L75.0256 56.3398Z'
                fill='white'
              />
              <motion.path
                variants={icon}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 3, ease: 'easeInOut' },
                  fill: { duration: 2.5, ease: [1, 0, 0.8, 1] },
                }}
                d='M100.04 74.4766L125.046 99.5116L150 74.4766L125.046 49.3019L75.0173 0L37.7688 37.5002L25.0058 49.3019L0 74.4766L25.0058 99.5116L50.0116 74.4766L75.0173 11.5399L100.04 74.4766Z'
                fill='white'
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Animation
