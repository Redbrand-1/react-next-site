import React from 'react'

interface Props {
  img: string
  text: string
  icon?: JSX.Element
}

const Icons: React.FC<Props> = (props): JSX.Element => {

  const icon = props.icon?props.icon:''
  return (
    <div className="icon_conteiner_ui flex align colum">
      <img  alt={"/list/" + props.img} src={"/list/" + props.img}/>
      <p>{icon}&nbsp;{props.text}</p>
    </div>
  )
} 

export default Icons