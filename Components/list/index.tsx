import React, { useState }  from 'react'

import { Price } from '../../Constants/interfase'

import Left from './left'
import Right from './right'

interface Props {
  ListValue: any | [Price]
}

const List: React.FC<Props> = (props): JSX.Element => {

  if(props.ListValue === null) {
    return null
  }

  const [ price , setPrice ] = useState< any | [Price] >(props.ListValue)

  return (
    <section className="list_home_conteiner flex colum">
      {
        price.map( (val, index) => {
          return (
            index % 2 === 0?
            <Left key={index} price={val} />
            :
            <Right key={index} price={val} />
          )
        })
      }


    </section>
  )
}

export default List