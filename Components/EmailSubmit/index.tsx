import React from 'react'

import Form from './form'

const Email = () => {

  return (
    <section className="email_conteiner">
      <h2>Вызовите специалиста на бесплатный замер!</h2>
      <p>Вызовите нашего замерщика на удобное для Вас время. 
        Он рассчитает точную стоимость ремонта ваших окон и поможет с выбором. 
        Отправьте заявку прямо сейчас!
      </p>
      <Form />
    </section>
  )
}

export default Email