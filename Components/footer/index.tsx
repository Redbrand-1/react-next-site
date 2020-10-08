import React from 'react'
import Logo from '../UI/logo'
import Info from '../UI/info'
import Email from '../UI/email'

const Footer = () => {
  return (
    <section className="footer_conteiner fx_sbt wrap">
      <Logo />
      <Info />
      <Email />
    </section>
  )
}

export default Footer