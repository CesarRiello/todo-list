export const slugify = enterString =>
  enterString
    .trim()
    .toLowerCase()
    .replace(/^\s+|\s+$/g, '')
    .split('')
    .map(c => {
      const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'.split('')
      const to = 'aaaaeeeeiiiioooouuuunc------'.split('')
      const index = from.indexOf(c)
      return index > -1 ? to[index] : c
    })
    .join('')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
