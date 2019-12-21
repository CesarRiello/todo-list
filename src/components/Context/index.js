import React from 'react'

const Context = React.createContext({
  task: {},
  tasks: [],
  tags: [],
  setParentState: () => {}
})

export const TaskProvider = Context.Provider
export const TaskConsumer = Context.Consumer
export default Context
