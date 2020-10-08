import React from 'react'

import Logo from '../UI/logo'
import Info from '../UI/info'

const Header: React.FC = (): JSX.Element => {

  return (
    <section className="header_info_logo_conteiner fx_sbt align">
      <Logo />
      <Info />
    </section>
  )
}

export default Header