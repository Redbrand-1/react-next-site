import React, { useState } from 'react'
import Swiper from 'react-id-swiper'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'

import { UrlServer } from '../../Constants/Url'
import { Work } from '../../Constants/interfase'

import { params } from './const'

interface Props {
  img: Work
}

const SwiperCom: React.FC<Props> = (props): JSX.Element => {
  if(props.img === null) {
    return null
  }

  const [swiper, updateSwiper] = useState(null)
  
  const { img } = props.img
  
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  }

  return (
    <section className="swiper_conteiner">
      <h2>Наши работы</h2>
      <Swiper {...params} getSwiper={updateSwiper} >
        {
          img.map((val, index) => {
            return <img key={index} alt={ UrlServer + val.url} src={ UrlServer + val.url}/>
          })
        }
      </Swiper>
        <DoubleLeftOutlined className="button-left" onClick={goPrev}/>
        <DoubleRightOutlined className="button-right" onClick={goNext}/>
  </section>
  )
}

export default SwiperCom