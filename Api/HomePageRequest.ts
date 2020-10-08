import Axios from '../lib/Axios'
import { SliderInt, Price, Info } from '../Constants/interfase'
import { UrlServer } from '../Constants/Url'
import { query } from '../graphQL/homePage'


export const HomePageRequest  = async () => {

  const Value = await Axios({
    url: UrlServer + '/graphql' ,
    method: 'post',
    data: { query }
  })
  .then((req) => {
    const Slider: [SliderInt] = req.data.data.slajderGlavnayaStraniczas
    const Price: [Price] = req.data.data.prajsGlavnayaStraniczas
    const Info: Info = req.data.data.infoGlavnayaStranicza
    return { Slider ,  Price , Info }
  })
  .catch(() => {
    const Slider = null
    const Price = null
    const Info = null
    return { Slider ,  Price , Info}
  })

  return Value
}