import React from 'react'
import { useSelector } from 'react-redux'

const Info: React.FC = (): JSX.Element => {

  const  Width = useSelector<number>( state => state.Width.Width )
  
  return (
    <section className="info_conteiner flex wrap align">
      <p className="info">с 9:00 до 20:00 без выходных</p>
      {
        Width < 400?
          <a href="tel:89582456707" className="telephone">8 (958) 245 67 07</a>
        :
          <p className="telephone">8 (958) 245 67 07</p>

      }

      <p className="info">Срочный ремонт окон, дверей</p>
    </section>
  )
}

export default Info