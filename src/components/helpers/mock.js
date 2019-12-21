const task = {
  id: 1,
  name: 'Some random task',
  isCompleted: false,
  created: '2019-12-23 23:59:59',
  remember: '0000-00-00 00:15:00',
  prevision: '2019-12-23 23:59:59',
  tag: 'some-tag'
}

export const tasks = {
  items: [
    { ...task, id: 1 },
    { ...task, id: 2, isCompleted: true },
    { ...task, id: 3, tag: 'work' },
    { ...task, id: 4 },
    { ...task, id: 5 },
    { ...task, id: 6 },
    { ...task, id: 7 },
    { ...task, id: 8 },
    { ...task, id: 9 },
    { ...task, id: 10 },
    { ...task, id: 11 },
    { ...task, id: 12 },
    { ...task, id: 13 },
    { ...task, id: 14 },
    { ...task, id: 15 },
    { ...task, id: 16 },
    { ...task, id: 17 },
    { ...task, id: 18 },
    { ...task, id: 19 },
    { ...task, id: 20 }
  ],
  total: 20,
  page: 1
}

export const tags = ['work', 'personal', 'urgent', 'nice-to-have']
