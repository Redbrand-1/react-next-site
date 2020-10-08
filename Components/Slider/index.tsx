import React, { Component } from "react";
import Slider from "react-slick";
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'

import { connect } from 'react-redux'

import { SliderInt}  from '../../Constants/interfase'
import { UrlServer } from '../../Constants/Url'

interface props {
  SliderValue: [SliderInt?] | any,
  Width: number // redux
}

class SliderComp extends Component<props> {
  
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

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }

    if(this.props.SliderValue === null) {
      return null
    }

    return (
      <section className="slider_conteiner">
          {
            this.props.Width > 600 ?
            <> {/** Большой слайдер */}
              <Slider ref={c => (this.slider = c)} {...settings} className="slider">
                {
                  this.props.SliderValue.map((val, index) => {
                    return (
                      <img key={index} alt={UrlServer + val.bigimage.url} src={UrlServer + val.bigimage.url} />
                    )
                  })
                }
              </Slider>
            </>
            :
            <> {/** Маленький слайдер */}
              <Slider ref={c => (this.slider = c)} {...settings} className="slider">
                {
                  this.props.SliderValue.map((val, index) => {
                    return (
                      <img key={index} alt={UrlServer + val.miniimage.url} src={UrlServer + val.miniimage.url} />
                    )
                  })
                }
              </Slider>
            </>
          }

        <DoubleLeftOutlined
          className="prev" onClick={this.previous}
        />
        <DoubleRightOutlined
          className="next" onClick={this.next}
        />
      </section>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    Width: state.Width.Width
  }
}

export default connect(MapStateToProps)(SliderComp)


// Скрывает стандартные стрелки

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