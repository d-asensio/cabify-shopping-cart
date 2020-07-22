function ensureInteger (value) {
  const inputValue = parseInt(value, 10)

  return !isNaN(inputValue) ? inputValue : 0
}

export default ensureInteger
