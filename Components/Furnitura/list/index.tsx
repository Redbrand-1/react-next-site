import React from 'react'

import Price from './price'

import { ListFur } from '../../../Constants/interfase'

interface Props {
  List: [ListFur]
}

const List: React.FC<Props> = (props): JSX.Element => {

  if(props.List === null ) {
    return null
  }


  return (
    <section className="list_furnitura_conteiner ">
      <h2>Наш цены на фурнитуру</h2>
      <p className="title_text">с учетом установки</p>
      <div style={{width: '100%'}} className="fx_ctr wrap">
        {
          props.List.map( (val, index) => {
            return (
              <Price key={index} val={val}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default List