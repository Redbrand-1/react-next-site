import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ADD_WIDTH } from '../Constants/type'

import Header from '../Components/Header'
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer'

import EmailSub from '../Components/EmailSubmit'

const Layout: React.FC<React.ReactNode> = ({ children }):JSX.Element  => {

    const dispatch = useDispatch()
    //  ширина нужна для слайдера  загрузки баннеров мини или фулл
    useEffect(() => {
      dispatch({ // ширина екрана при запуске
        type: ADD_WIDTH,
        Width: window.innerWidth
      })
    }, [true])
  
    useEffect(() => {
      window.addEventListener('resize', ()=>{
        dispatch({ // ширина екрана 
          type: ADD_WIDTH,
          Width: window.innerWidth
        })
      })
    }, [true])


  return (
    <>
      <header className="layout_conteiner align fx_ctr colum">
        <Header/>
        <Navbar />
        <div className="back"/>
      </header>
      <main className="layout_conteiner layout_Height flex align colum"> {/* layout_Height - info.sass */}
        { children }
        <EmailSub />
      </main>
      <footer className="layout_conteiner_footer fx_ctr align wrap">
        <Footer />
      </footer>
    </>
  )
}

export default Layout