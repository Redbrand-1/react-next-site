import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from '../../lib/ActiveLink'

import { MenuOutlined } from '@ant-design/icons'

const Navbar = () => {

  const [ status, setStatus ] = useState(false)

  const SetStatus = () => {
    setStatus(!status)
  }

  const  Width = useSelector<number>( state => state.Width.Width )
  const StyleStatus = "navbar fx_ctr align colum " + status

  const Links = [
    { href: "/", label: 'Ремонт окон'  },
    { href: "/furnitura", label: 'Фурнитура'  },
    { href: "/windows", label: 'Стеклопеты - Москитные сетки'  },
    { href: "/decoration", label: 'Отделка окон - Подоконники'  },
  ]

  return (
    Width > 600 ?
      <section className="navbar_conteiner">
        <nav className="fx_sbt align">
        {
          Links.map((val, index) => {
            return <Link key={index} href={val.href} activeClassName="active" ><a>{val.label}н</a></Link>
          })
        }
        </nav>
      </section>
    :
      <section className="navbar_conteiner_mini fx_end align">
        <nav className={StyleStatus} onClick={() => SetStatus()}>
        {
          Links.map((val, index) => {
            return <Link key={index} href={val.href} activeClassName="active" ><a>{val.label}н</a></Link>
          })
        }
        </nav>
        <p onClick={() => SetStatus()} className="fx_ctr align">Меню</p>
        <MenuOutlined onClick={() => SetStatus()} className="icon"/>
      </section>

  )
}

export default Navbar