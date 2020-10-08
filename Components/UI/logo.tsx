import React from 'react'
import { useSelector } from 'react-redux'

const Logo: React.FC = (): JSX.Element => {

  const  Width = useSelector<number>( state => state.Width.Width )

  return (
    Width > 600?
    <section className="logo_conteiner flex">
      <img alt="logo.png" src="/logo.png"/>
      <h1 className="fx_ctr align">Аврора</h1>
    </section>
    :
    <section className="logo_conteiner_mini flex">
      <img alt="logo.png" src="/logo.png"/>
    </section>
  )
}

export default Logo