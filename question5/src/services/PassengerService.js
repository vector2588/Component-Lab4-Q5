import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getEvents(page,size) {
    console.log('/passenger?page='+ page + '&size='+size)
    return apiClient.get('/passenger?page='+ page + '&size='+size)
  },
  getEvent() {
    return apiClient.get('/passenger')
  }
}