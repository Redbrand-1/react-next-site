import axios from 'axios'
import { UrlServer } from '../Constants/Url'

export default axios.create({
  baseURL: UrlServer 
})
