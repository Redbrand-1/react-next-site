import React from 'react'

const InfoCom: React.FC = (): JSX.Element => {
  return (
    <section className="info_comp_furnitura_conteiner flex">
      <div className="info_conteiner">
        <div className="title_conteiner flex  wrap">
          <h2 className="flex align">Premium фурнитура</h2>
          <div className="img_cont">
            <img  className="img_1" alt="/furnit/roto.png" src="/furnit/roto.png"/>
            <img  className="img_2" alt="/furnit/mako.jpeg" src="/furnit/mako.jpg"/>
            <img  className="img_1" alt="/furnit/haus.jpeg" src="/furnit/haus.jpg"/>
          </div>
        </div>
        <p className="text flex align">Оконная фурнитура это устройство, которое объединяет в себе различные механизмы, предназначенные для функционирования окна. Ручки и петли, запоры и уплотнители это те элементы, важность которых трудно переоценить, хотя мы и не придаем им должного значения. А ведь даже маленькая неполадка в оконном механизме в зимний морозный день, например, может привести к не очень приятным последствиям. Поэтому, все составляющие окон ПВХ должны быть идеального качества, сборки и стабильной прочности.
        </p>
      </div>
      <div className="img_conteiner flex">
        <img alt="/furnit/1.jpg" src="/furnit/1.jpg" />
      </div>
    </section>
  )
}

export default InfoCom