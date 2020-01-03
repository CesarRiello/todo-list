export const checkDate = date => /^([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(date)

export const checktime = time => /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):?([0-5][0-9])?$/.test(time)

export const datetimeErrorMessage = datetime => {
  if (datetime.length < 10) return ''

  if (!checkDate(datetime.split(' ')[0])) return 'Enter a valid date'

  if (datetime.length < 17) return ''

  if (!checktime(datetime.split(' ')[1] || '')) return 'Enter a valid time'

  const jsDatetime = new Date(datetime)
  if (jsDatetime.toString === 'Invalid Date') return 'Enter a valid date and time'

  return ''
}

export const checkIsFuture = datetime => {
  const future = new Date(datetime).getTime()
  const now = new Date().getTime()
  return future > now
}

export const isBetweenDates = (beginFilter, endFilter, datetime) => {
  const begining = new Date(beginFilter).getTime()
  const end = new Date(endFilter).getTime()
  const timestamp = new Date(datetime).getTime()

  if (isNaN(begining) || isNaN(end) || isNaN(timestamp)) return true
  return timestamp > begining && timestamp < end
}
