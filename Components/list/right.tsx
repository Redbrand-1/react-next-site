import React from 'react'
import { Price } from '../../Constants/interfase'
import { UrlServer } from '../../Constants/Url'

interface Props {
  price: Price
}


const Right: React.FC<Props> = (props): JSX.Element => {

  const { price } = props

  return (
    <div className="list_home_conteiner">
      
      <div className="list_img_cont fx_end">
        <img alt={UrlServer + price.img.url} src={UrlServer + price.img.url} />
      </div>
      <div className="list_price_cont list_img_left flex  colum">
        <h2>{price.title}</h2>
        <p className="text">{price.pre}</p>
        {
          price.list.map((val, index) => {
            return (
              <div key={index} className="price_cont list_price_left flex  align" >
                <div className="fx_sbt align" ><p>{val.text}</p><b>{val.price}</b></div>
              </div>
            )
          })
        }
        
      </div>

    </div>
  )
}

export default Right