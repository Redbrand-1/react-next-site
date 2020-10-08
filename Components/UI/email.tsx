import React from 'react'
import { useSelector } from 'react-redux'

const Email: React.FC = (): JSX.Element => {
  const  Width = useSelector<number>( state => state.Width.Width )

  const Style = Width > 810? '280px': '100%'
  return (
    <section style={{width: Style }}>
      <h2 style={{fontFamily: 'El Messiri', fontSize: '24px',lineHeight: '38px', color:'#5CBAF0', width: '100%', textAlign: 'center' }}>наш Email</h2>
      <p style={{fontFamily: 'El Messiri', fontSize: '24px',lineHeight: '38px', color:'#534F4', width: '100%', textAlign: 'center' }} >prm.avrora@gmail.com</p>
    </section>
  )
}

export default Email