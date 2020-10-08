import React, { useState } from 'react'

import FormStill from './formNum'
import Colors from './color'

const GetValidSum = (val1 , val2): number => {
  let Height: number = +val1
  let Width: number  = +val2

  if( Width < 500) { Width = 500 }
  if ( Width > 5000 ) { Width = 5000 }

  let sum: any = Number(Height * Width / 1000)
  sum  = parseInt(sum)

  return sum

}


const Sill: React.FC = (): JSX.Element  => {

  const [ WidthInput, setWidthInput ] = useState<number>(500)
  const [ SelectAntd, setSelectAntd ] = useState<number>(1200)

  const [ imageVal , setImgVal ]  = useState({
    bigimage: '1.jpg',
    active: 0,
    imgmini:  [
        { mini: '1.jpg', status: true, color: 'белый глянец' },
        { mini: '2.jpg', status: false, color: 'белый матовый' },
        { mini: '4.jpg', status: false, color: 'венге глянцевый' },
        { mini: '5.jpg', status: false, color: 'венге матовый' },
        { mini: '6.jpg', status: false, color: 'горная лиственница' },
        { mini: '7.jpg', status: false, color: 'золотой дуб глянец' },
        { mini: '8.jpg', status: false, color: 'каррара мрамор глянец' },
        { mini: '10.jpg', status: false, color: 'махагони' },
        { mini: '11.jpg', status: false, color: 'махагони глянец' },
        { mini: '12.jpg', status: false, color: 'светлый дуб глянец' },
        { mini: '13.jpg', status: false, color: 'светлый дуб' },
        { mini: '14.jpg', status: false, color: 'светлый мрамор' },
    ]}
  )


  const ImageBigAdd = (val, index) => {
    const Arr = {...imageVal}
    if( index !== Arr.active) {

      Arr.bigimage = val.mini // актив большая карт
      Arr.imgmini[Arr.active].status = false // прошлая актив картинка
      Arr.imgmini[index].status = true // актив картинка
      Arr.active = index // индекс актив картинки
      setImgVal(Arr)  
    }
  }

  return (
    <section className="sill_conteiner fx_ctr">
      <div className="conteiner flex">
        <img className="image_full" alt={ "/still/big/" + imageVal.bigimage} src={ "/still/big/" + imageVal.bigimage}/>
        <div className="price_cont" >
          <h2>Пластиковые подоконники Möller</h2>
          <p className="text">Подоконники Möller изготовлены по немецкой технологии. Основа подоконников Möller - высококачественная смесь дерево-пластик. Эта рецептура запатентована в Германии под брендом "LIGNODUR". Смесь "LIGNODUR" представляет собой однородную, без формальдегидов композицию компонентов ПВХ и древесной муки.
          </p>
          <FormStill
            setWidthInput={setWidthInput}
            setSelectAntd={setSelectAntd}
            maxHeight={2000}
            maxWidth={3000}
          />
          <Colors image={imageVal.imgmini} ImageBigAdd={ImageBigAdd}/>
          <p className="result">Вместе с установкой: {GetValidSum(SelectAntd, WidthInput)} рублей</p>
        </div>
      </div>
    </section>
  )
}

export default Sill