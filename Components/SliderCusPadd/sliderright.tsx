import React from 'react'
import { CheckOutlined } from '@ant-design/icons'

import { UrlServer } from '../../Constants/Url'

import { SliderMS } from '../../Constants/interfase'

interface Props {
  SliderVal: SliderMS
}

const SliderRight:React.FC<Props> = (props): JSX.Element  => {

  const { SliderVal } = props

  return (
    <div className="slider flex">
      <div className="price_cont price_right">
        <h2>{SliderVal.title}</h2>
        <p className="text ">{SliderVal.text}</p>
        <p className="info"><CheckOutlined style={{paddingRight: '10px'}} /> Лучшее качество</p>
        <p className="info"><CheckOutlined style={{paddingRight: '10px'}} />Быстрая установка</p>
        <p className="info"><CheckOutlined style={{paddingRight: '10px'}} />Хорошая цена</p>
        <p className="result right_result"><b>Стоимость:&nbsp;</b>{SliderVal.price}</p>
      </div>
      <div className="img_cont fx_ctr align">
      <img alt={UrlServer + SliderVal.big.url} src={UrlServer + SliderVal.big.url}/>
      </div>
    </div>
  )
}

export default SliderRight