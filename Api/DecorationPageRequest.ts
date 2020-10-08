import Axios from '../lib/Axios'
import { Work, Price } from '../Constants/interfase'
import { UrlServer } from '../Constants/Url'
import { query } from '../graphQL/DecorationPage'


export const DecorationPageRequest = async () => {

  const Value = await Axios({
    url: UrlServer + '/graphql' ,
    method: 'post',
    data: { query }
  })
  .then((req) => {
    const Work: Work = req.data.data.slajderRaboty
    const Price: [Price] = req.data.data.podokonnikiOtdelkas
    

    return { Work, Price }
  })
  .catch(() => {
    const Work = null
    const Price = null

    return { Work, Price }
  })

  return Value
}