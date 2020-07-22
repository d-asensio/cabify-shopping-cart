import ensureInteger from './ensureInteger'

it('do not modify the input if a positive integer is passed', () => {
  expect(
    ensureInteger(1)
  ).toBe(1)
})

it('do not modify the input if an negative integer is passed', () => {
  expect(
    ensureInteger(-2)
  ).toBe(-2)
})

it('do not modify the input if zero is passed', () => {
  expect(
    ensureInteger(0)
  ).toBe(0)
})

it('returns the parsed version of a string representing a positive integer', () => {
  expect(
    ensureInteger('34')
  ).toBe(34)
})

it('returns the parsed version of a string representing a negative integer', () => {
  expect(
    ensureInteger('-8')
  ).toBe(-8)
})

it('returns the parsed version of a string representing a zero', () => {
  expect(
    ensureInteger('0')
  ).toBe(0)
})

it('returns zero if a string that is not parseable to an integer is passed', () => {
  expect(
    ensureInteger('this is not a number')
  ).toBe(0)
})

it('returns zero if `NaN` is passed', () => {
  expect(
    ensureInteger(NaN)
  ).toBe(0)
})

it('returns zero if `undefined` is passed', () => {
  expect(
    ensureInteger(undefined)
  ).toBe(0)
})

it('returns zero if `false` is passed', () => {
  expect(
    ensureInteger(undefined)
  ).toBe(0)
})

it('returns zero if `true` is passed', () => {
  expect(
    ensureInteger(undefined)
  ).toBe(0)
})
