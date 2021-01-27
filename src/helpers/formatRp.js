function formatRp (numbers) {
  numbers = String(numbers)
  const temp = []
  let counter = 0
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (counter === 3) {
      temp.unshift('.')
    }
    if (counter === 3) {
      counter = 0
    }
    counter++
    temp.unshift(numbers[i])
  }
  temp.push(',00')
  const output = temp.join('')
  return `Rp ${output}`
}

module.exports = formatRp
