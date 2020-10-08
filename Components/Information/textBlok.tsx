import React from 'react'
import { UrlServer } from '../../Constants/Url'

interface Props {
  title: string
  text: string
  img: string
}

const TextBlock: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="text_block_conteiner align colum flex">
      <h2>{props.title}</h2>
      <p className="text">{props.text}</p>
      <img src={UrlServer  + props.img} alt={UrlServer  + props.img} />
    </div>
  )
}

export default TextBlock