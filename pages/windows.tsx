import React from 'react'
import { NextPage } from 'next'

import Layout from '../Layout'

import SwiperCom from '../Components/Swiper'
import SliderCusPadd from '../Components/SliderCusPadd'
import Text from '../Components/Information'
import ListPrice from '../Components/list'

import { WindowsPageRequest } from '../Api/WindowsPageRequest'

import { SliderMS, Work, Info, Price } from '../Constants/interfase'

interface Props {
  SliderMS: [SliderMS] | null
  Work: Work | null
  Info: Info | null
  Price: [Price] | null
}


const WindowSill:NextPage<Props> = (props):JSX.Element  => { 

  return (
    <Layout>

      <SliderCusPadd  SliderVal={props.SliderMS} />
      <Text Info={props.Info}/>
      <ListPrice ListValue={props.Price} />
      <SwiperCom img={props.Work} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { SliderMS, Work, Info, Price } = await WindowsPageRequest()

  return {
    props: {
      SliderMS , Work , Info, Price
    },
  }
}

export default WindowSill