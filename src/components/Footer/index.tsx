import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { IoMdMail, BsInstagram, ImWhatsapp } from '../../utils/_icons'
import styles from './styles.module.scss'

const Footer = () => {
  const router = useRouter()
  return (
    <section className={styles.FooterContainer}>
      <main>
        <aside>
          <div
            onClick={() => router.push('#home')}
            className={styles.FooterLogo}
          >
            <Image layout='fill' src='/assets/dompixel-logo.png' />
          </div>

          <div>
            <a
              href='https://g.page/DomPixel?share'
              target='_blank'
              rel='noopener noreferrer'
            >
              <p>Rua: Travessa A, 20 </p>
              <p>Bairro Araes,</p>
              <p>Cuiabá - MT, 78005-825</p>
            </a>
          </div>
          <div>
            <div>
              <a
                href='https://www.instagram.com/dompixelagencia'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsInstagram className={styles.icons} />
              </a>
              <a
                href='https://bit.ly/dompixelagencia'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ImWhatsapp className={styles.icons} />
              </a>
              <a
                href='mailto:anderson@dompixel.com.br'
                target='_blank'
                rel='noopener noreferrer'
              >
                <IoMdMail className={styles.icons} />
              </a>
            </div>
          </div>
        </aside>
      </main>
      <p> DOMPIXEL TECNOLOGIA LTDA – CNPJ 36447174000144</p>
    </section>
  )
}

export default Footer
