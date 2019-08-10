module.exports = () => {
  const array = []
  const { stack } = new Error()
  const lines = stack.split('\n')
  // line 0 is error, line 1 is this function
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].replace('at ', '').trim()
    const method = line.substring(0, line.indexOf(' '))
    const location = line.substring(line.indexOf('(') + 1, line.indexOf(')')).split(':')
    array.push({
      method,
      path: location[0],
      line: location[1],
      column: location[2]
    })
  }
  return array
}
