import axios from 'axios'
import * as url from './urlConfig'

const api = axios.create({
  header: 'content-Type: application/json',
  token: 'George'
})

export const fetchApi = {
  // api get 範例
  sampleGet() {
    return api.get(url.sample)
  },
  // api post 範例
  samplePost(params) {
    return api.post(url.sample, params)
  }
}