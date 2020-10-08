import React from 'react'
import Head from 'next/head'
import App, { AppInitialProps } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { withRedux } from '../lib/redux'

import Title from '../Head/app'

import 'antd/dist/antd.css'
import '../styles/global.sass'
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";


const CustomApp = (props) => {
  const { Component, pageProps, router } = props
  return (
    <>
      <Title />
      <PageTransition timeout={200} classNames="page-transition">
        <Component {...pageProps} key={router.route}/>
      </PageTransition>
    <style jsx global>
      {`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
      `}
    </style>
    </>
  )
}

export async function getStaticProps(appContext) {
  const appProps: AppInitialProps = await App.getInitialProps(appContext);

  return {
    props: {
      ...appProps 
    },
  }
}
export default withRedux(CustomApp)