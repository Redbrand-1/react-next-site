import Axios from '../lib/Axios'
import { SliderMS, Work, Info, Price } from '../Constants/interfase'
import { UrlServer } from '../Constants/Url'
import { query } from '../graphQL/windowsPage'


export const WindowsPageRequest = async () => {

  const Value = await Axios({
    url: UrlServer + '/graphql' ,
    method: 'post',
    data: { query }
  })
  .then((req) => {
    const SliderMS: [SliderMS] = req.data.data.slajderMoskitnyeSetkis
    const Work: Work = req.data.data.slajderRaboty
    const Info: Info = req.data.data.infoSteklopaketyMosSetki
    const Price: [Price] = req.data.data.steklopaketMosSetkaPrajs

    return { SliderMS, Work, Info, Price }
  })
  .catch(() => {
    const SliderMS = null
    const Work = null
    const Info = null
    const Price = null

    return { SliderMS, Work, Info, Price }
  })

  return Value
}