const parseDate = (text) => {
  const re = new RegExp(/(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})/, 'u')
  let result = re.exec(text)
  const { year, month, day } = result.groups
  return `${day}/${month}/${year}`
}

module.exports = parseDate
