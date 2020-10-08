import React from 'react'
import { Info } from '../../Constants/interfase'

import TextBlock from './textBlok'

interface Props {
  Info: Info
}

const Text = (props: Props) => {
  if(props.Info === null) {
    return null
  }

  return (
    <section className="windows_conteiner fx_ctr" style={{marginTop: '20px'}}>
      <TextBlock title={props.Info.infoone.title} text={props.Info.infoone.text} img={props.Info.infoone.img.url} />
      <TextBlock title={props.Info.infotwo.title} text={props.Info.infotwo.text} img={props.Info.infotwo.img.url} />
    </section>
  )
}

export default Text