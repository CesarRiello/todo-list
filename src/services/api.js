import axios from 'axios'
import { stringify } from 'qs'

const endPoint = 'https://www.czare.com.br/todo-api/'

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
  ...tag
})

const taskToApi = task => {
  const remind = (new Date(task.forecast) || new Date()).getDate() + Number(task.remind)
  return { ...task, remind }
}

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

export const saveTask = (task, sucess, error) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: stringify({ ...taskToApi(task) }),
    url: `${endPoint}tasks`
  }

  axios(options)
    .then(response => {
      sucess(response)
    })
    .catch(e => {
      error(e)
    })
}

export const updateTask = (task, sucess, error) => {
  const options = {
    method: 'PUT',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: stringify({ ...task }),
    url: `${endPoint}tasks/${task.id}`
  }

  axios(options)
    .then(response => {
      sucess(response)
    })
    .catch(e => {
      error(e)
    })
}

export const deleteTask = (task, sucess, error) => {
  axios
    .delete(`${endPoint}tasks/${task.id}`)
    .then(response => {
      sucess(response)
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

export const saveTag = (tag, sucess, error) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: stringify({ ...tag }),
    url: `${endPoint}tags`
  }

  axios(options)
    .then(response => {
      sucess(response)
    })
    .catch(e => {
      error(e)
    })
}

export const updateTag = (tag, sucess, error) => {
  const options = {
    method: 'PUT',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: stringify({ ...tag }),
    url: `${endPoint}tags/${tag.id}`
  }

  axios(options)
    .then(response => {
      sucess(response)
    })
    .catch(e => {
      error(e)
    })
}

export const deleteTag = (tag, sucess, error) => {
  axios
    .delete(`${endPoint}tags/${tag.id}`)
    .then(response => {
      sucess(response)
    })
    .catch(e => {
      error(e)
    })
}
