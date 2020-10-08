import Axios from '../lib/Axios'
import { ListFur, Price } from '../Constants/interfase'
import { UrlServer } from '../Constants/Url'
import { query } from '../graphQL/furnituraPage'


export const FurnituraPageRequest  = async () => {

  const Value = await Axios({
    url: UrlServer + '/graphql' ,
    method: 'post',
    data: { query }
  })
  .then((req) => {
    const List: [ListFur] = req.data.data.furnituras
    const Price: [Price] = req.data.data.furnituraPrajs

    return { List, Price }
  })
  .catch(() => {
    const List = null
    const Price = null
    return { List, Price }
  })

  return Value
}