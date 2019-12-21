const uuidGenerator = () => {
  const timestamp = new Date().getTime()
  const timePageLoad = (performance && performance.now && performance.now() * 1000) || 0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(character) {
    const r16 = Math.random() * 16
    const randomChar = timestamp > 0 ? (timestamp + r16) % 16 | 0 : (timePageLoad + r16) % 16 | 0
    return (character === 'x' ? randomChar : (randomChar & 0x3) | 0x8).toString(16)
  })
}

export default uuidGenerator
