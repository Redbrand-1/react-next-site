import React from 'react'
import { imageMini } from '../../../Constants/interfase'

interface Props {
  image: imageMini[]
  ImageBigAdd(val: imageMini, index: number)
}

const Colors: React.FC<Props> = (props): JSX.Element => {

  return (
    <div className="colors_conteiner fx_ctr wrap">
      {
        props.image.map((val, index) => {
          return (
            <div key={index}>
            <div 
              className="colors"
              style={{background: `url(/still/mini/${val.mini})`,  borderColor: val.status === true? '#5FC4F9' : '#5F5C5C' }} 
              onClick={() => props.ImageBigAdd(val, index)}
            />
            <p  style={{ textAlign: 'center', fontSize: '13px', whiteSpace: 'pre-wrap', width: '90px' }}>{val.color}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Colors