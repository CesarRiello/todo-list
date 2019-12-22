export const dateIso = date =>
  String(date)
    .replace(/\D/g, '')
    .replace(/^(\d{4})(\d)/, '$1-$2')
    .replace(/^(\d{4})-(\d{2})(\d)/, '$1-$2-$3')
    .replace(/^(\d{4})-(\d{2})-(\d{2})(\d)/, '$1-$2-$3 $4')
    .replace(/^(\d{4})-(\d{2})-(\d{2}) (\d{2})(\d)/, '$1-$2-$3 $4:$5')
    .replace(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})(\d)/, '$1-$2-$3 $4:$5')

export default { dateIso }
