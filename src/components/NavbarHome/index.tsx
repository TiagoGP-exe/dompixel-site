import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { firstUpperCaps } from '../../utils/string'
import styles from './styles.module.scss'

interface DataSelect {
  label: string
  value: string
}

const initialRoutes: DataSelect[] = [
  { label: 'home', value: 'home' },
  { label: 'sobre', value: 'about' },
  { label: 'recursos', value: 'resource' },
  { label: 'depoimentos', value: 'testimonial' },
]

const NavbarHome = () => {
  const router = useRouter()
  const [openOptions, setOpenOptions] = useState(false)

  const handleClick = (path: string) => {
    setOpenOptions(false)
    router.push(path)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#1f2735',
        justifyContent: 'center',
        display: 'flex',
        zIndex: 20,
      }}
    >
      <div className={styles.navbarContent}>
        <div className={styles.navbar}>
          <Image layout='fill' src='/assets/dompixel-logo.png' />
        </div>
        <div className={styles.navbarText}>
          <p onClick={() => handleClick('#home')}>Home</p>
          <p onClick={() => handleClick('#about')}>Sobre</p>
          <p onClick={() => handleClick('#resource')}>Recursos</p>
          <p onClick={() => handleClick('#testimonial')}>Depoimentos</p>
        </div>

        <div className={styles.menu}>
          <HiOutlineMenu
            color='#fff'
            onClick={() => setOpenOptions(!openOptions)}
          />
        </div>
      </div>
      {openOptions && (
        <div
          className={styles.containerNavOption}
          onClick={() => setOpenOptions(false)}
        >
          <div className={styles.navOption}>
            {initialRoutes.map(({ label, value }) => (
              <p key={value} onClick={() => handleClick(`/#${value}`)}>
                {firstUpperCaps(label)}
              </p>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default NavbarHome
