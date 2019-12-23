const slugify = enterString =>
  enterString
    .trim()
    .toLowerCase()
    .replace(/^\s+|\s+$/g, '')
    .split('')
    .map(c => {
      const from = 'ãàáäâèéëêìíïîòóöôõùúüûñç·/_,:;'.split('')
      const to = 'aaaaaeeeeiiiiooooouuuunc------'.split('')
      const index = from.indexOf(c)
      return index > -1 ? to[index] : c
    })
    .join('')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

export default slugify
