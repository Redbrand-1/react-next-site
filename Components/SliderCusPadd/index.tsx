import React, { Component } from "react";
import Slider from "react-slick";
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'

import { SliderMS } from '../../Constants/interfase'

import { UrlServer } from '../../Constants/Url'

import SliderLeft from './sliderleft'
import SliderRight from './sliderright'

interface Props {
  SliderVal: SliderMS | any
  
}

class SliderCusPadd extends Component<Props> {
  slider: any

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {

    if(this.props.SliderVal === null) {
      return null
    }

    const SliderVal = this.props.SliderVal

    const settings = {
      customPaging: function(i) { // пагинация картинки
        return (
          <a>
            <img alt={ UrlServer + SliderVal[i].mini.url }  src={ UrlServer + SliderVal[i].mini.url }/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true, 
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      adaptiveHeight: true
    }

    return (
      <section className="slider_custom_padding_conteiner">
        <b className="title">Выберите тип Сетки</b>
        <Slider 
          ref={c => (this.slider = c )}
          {...settings} 
          className="slider_conteiner"
        >
          {
            SliderVal.map((val, index) => {
              return (
                index % 2?
                  <SliderLeft key={index} SliderVal={val} />
                :
                  <SliderRight key={index} SliderVal={val} />
              )

            })
          }
        </Slider>

        <DoubleLeftOutlined
          className="prev" onClick={this.previous}
        />
        <DoubleRightOutlined
          className="next" onClick={this.next}
        />
      </section>
    )
  }
}

export default SliderCusPadd


/////////////////////////////
const SampleNextArrow = () => {
  return (
    <div
      style={{display: "none"}}
    />
  );
}

const SamplePrevArrow = () => {
  return (
    <div
      style={{display: "none"}}
    />
  );
}