import React from 'react'
import { NextPage } from 'next'

import { FurnituraPageRequest } from '../Api/FurnituraPageRequest'

import { ListFur, Price } from '../Constants/interfase'

import Layout from '../Layout'

import InfoCom from '../Components/Furnitura/infoCom'
import List from '../Components/Furnitura/list'
import ListPrice from '../Components/list'

interface Props {
  List: [ListFur] | null
  Price: [Price] | null
}

const Furnitura:NextPage<Props> = (props) => {

  return (
    <Layout>

      <InfoCom />
      <List List={props.List} />
      <ListPrice ListValue={props.Price} />
  </Layout>
  )
}

export async function getServerSideProps() {
  const { List, Price } =  await FurnituraPageRequest()
  return {
    props: {
      List, Price
    },
  }
}


export default Furnitura 