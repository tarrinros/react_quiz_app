import axios from 'axios'

export default axios.create({
  baseURL: 'https://quizzy-4be1b.firebaseio.com'
})