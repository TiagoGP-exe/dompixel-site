import React from 'react'
import * as icons from '../../utils/_icons'
import { getIcon } from '../Icon'
import styles from './styles.module.scss'

interface IconsNameProps {
  name: keyof typeof icons
  color: string
}

const iconsName: IconsNameProps[] = [
  { name: 'FaLaravel', color: '#FF2D20' },
  { name: 'AiFillHtml5', color: '#E34F26' },
  { name: 'SiJavascript', color: '#F7DF1E' },
  { name: 'DiCss3', color: '#1572B6' },
  // { name: 'FaYarn', color: '#2C8EBB' },
  // { name: 'FaSass', color: '#FF6C37' },
  { name: 'SiTypescript', color: '#3178C6' },
  { name: 'FaPhp', color: '#777BB4' },
  // { name: 'SiVisualstudiocode', color: '#007ACC' },
  { name: 'FaReact', color: '#61DAFB' },
  { name: 'FaVuejs', color: '#4FC08D' },
  // { name: 'BsFillBootstrapFill', color: '#7952B3' },
  // { name: 'SiSqlite', color: '#003B57' },
  { name: 'SiPostgresql', color: '#fff' },
  // { name: 'SiPostman', color: '#FF6C37' },
  { name: 'FaAws', color: '#232F3E' },
  { name: 'SiMysql', color: '#4479A1' },
  // { name: 'SiElectron', color: '#47848F' },
  // { name: 'SiExpo', color: '#2869c9' },
  { name: 'FaNode', color: '#339933' },
  { name: 'BsYoutube', color: '#FF2D20' },
  { name: 'FaInstagram', color: '#7952B3' },
  { name: 'SiGoogleads', color: '#EEDC53' },
  { name: 'FaFacebook', color: '#007ACC' },
]

const imagesName = ['partner', 'google-analytics', 'facebook-marketing']

const Certificates = () => {
  return (
    <section className={styles.ContainerCertificates}>
      <h1>Confiada por mais de 100 empressas e startups</h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flex: 2,
          gap: '0.75rem',
        }}
      >
        <main>
          <header>
            {imagesName.map(image => (
              <img key={image} src={`/assets/${image}.png`} alt='' />
            ))}
          </header>
          {iconsName.map(({ name, color }) =>
            getIcon({ icon: name, color: color, size: 28 })
          )}
        </main>
      </div>
    </section>
  )
}

export default Certificates
