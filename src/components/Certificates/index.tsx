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
  { name: 'FaYarn', color: '#2C8EBB' },
  { name: 'FaSass', color: '#CC6699' },
  { name: 'SiTypescript', color: '#3178C6' },
  { name: 'FaPhp', color: '#777BB4' },
  { name: 'SiVisualstudiocode', color: '#007ACC' },
  { name: 'FaReact', color: '#61DAFB' },
  { name: 'FaVuejs', color: '#4FC08D' },
  { name: 'BsFillBootstrapFill', color: '#7952B3' },
  { name: 'SiSqlite', color: '#003B57' },
  { name: 'SiPostgresql', color: '#fff' },
  { name: 'SiPostman', color: '#FF6C37' },
  { name: 'FaAws', color: '#232F3E' },
  { name: 'SiMysql', color: '#4479A1' },
  { name: 'SiElectron', color: '#47848F' },
  { name: 'SiExpo', color: '#2869c9' },
  { name: 'FaNode', color: '#339933' },
]

const imagesName = ['ads', 'google-analytics', 'facebook-marketing', 'power-bi']

const Certificates = () => {
  return (
    <section className={styles.ContainerCertificates}>
      <h1>Certificações e Tecnologias</h1>

      <header>
        {imagesName.map(image => (
          <img key={image} src={`/assets/${image}.png`} alt='' />
        ))}
      </header>

      <main>
        {iconsName.map(({ name, color }) =>
          getIcon({ icon: name, color: color, size: 64 })
        )}
      </main>
    </section>
  )
}

export default Certificates
