import React from 'react'
import { NextPage } from 'next'

import Layout from '../Layout'
import Sill from '../Components/Decoration/sill'
import ListPrice from '../Components/list'
import SwiperCom from '../Components/Swiper'

import { DecorationPageRequest } from '../Api/DecorationPageRequest'
import { Work, Price } from '../Constants/interfase'




interface Props {
  Work: Work | null
  Price: [Price]

}

const Decoration: NextPage<Props> = (props) => {

  return (
    <Layout>

      <Sill />
      <ListPrice ListValue={props.Price} />
      <SwiperCom img={props.Work} />
      
  </Layout>
  )
}

export async function getServerSideProps() {
  const { Work, Price } = await DecorationPageRequest()

  return {
    props: {
      Work, Price
    },
  }
}

export default Decoration