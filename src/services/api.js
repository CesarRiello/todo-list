import axios from 'axios'
const endPoint = 'http://czare.com.br/todo-api/'

const taskMapper = {
  id: '',
  name: '',
  tag: '',
  isCompleted: false,
  completed: '',
  isReminded: false,
  remind: '',
  created: '',
  forecast: ''
}


const tagMapper = {
  id: '',
  tag: '',
  created: ''
}


const taskFromApi = (task, mapper) => ({
  ...mapper,
  ...task,
  isCompleted: task.isCompleted === '1',
  isReminded: task.isReminded === '1'
})

const tagFromApi = (tag, mapper) => ({
  ...mapper,
  ...tag,
})



export const get = resource => axios.get(`${endPoint}${resource}`)

export const getTasks = (sucess, error) => {
  axios
    .get(`${endPoint}tasks`)
    .then(response => {
      if ((response.data || []).length) {
        const tasks = response.data.map(t => taskFromApi(t, taskMapper))
        sucess({ tasks })
      }
    })
    .catch(e => {
      error(e)
    })
}

export const getTags = (sucess, error) => {
  axios
    .get(`${endPoint}tags`)
    .then(response => {
      if ((response.data || []).length) {
        const tags = response.data.map(t => tagFromApi(t, tagMapper))
        sucess({ tags })
      }
    })
    .catch(e => {
      error(e)
    })
}
