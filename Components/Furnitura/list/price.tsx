import React from 'react'

import { UrlServer } from '../../../Constants/Url'
import { ListFur } from '../../../Constants/interfase'

interface Props {
  val: ListFur
}

const Price: React.FC<Props> = (props): JSX.Element => {

  const val = props.val

  return (
    <>
      <div className="conteiner flex colum align">
        <img alt={UrlServer +val.img.url} src={UrlServer +val.img.url}  />
        <p className="text" >{val.text}</p>
        <p className="result">Стоимость: {val.price}руб.</p>
      </div>
    </>
  )
}

export default Price