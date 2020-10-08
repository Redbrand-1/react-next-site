import React from 'react'
import { NextPage } from 'next'

import Layout from '../Layout'

import Slider from '../Components/Slider'
import ListPrice from '../Components/list'
import IconsTitle from '../Components/IndexPage/titleIcon'
import Text from '../Components/Information'

import { SliderInt, Price, Info } from '../Constants/interfase'
import { HomePageRequest }from '../Api/HomePageRequest'

interface Props {
  Slider: [SliderInt] | null
  Price: [Price] | null
  Info: Info | null
}

const Home:NextPage<Props> = (props):JSX.Element  => {

  return (
    <Layout>

      <Slider SliderValue={props.Slider} /> 
      <IconsTitle />
      <ListPrice ListValue={props.Price} /> 
      <Text Info={props.Info}/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { Slider ,  Price , Info } = await HomePageRequest()

  return {
    props: {
      Slider ,  Price , Info
    },
  }
}

export default Home