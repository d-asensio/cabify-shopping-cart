import { createDeepEqualSelector } from '..'

it('executes the result function once when calling the selector two times with deep equal (but different) objects', () => {
  const resultFunc = jest.fn()

  const deepEqualSelector = createDeepEqualSelector(
    ({ foo }) => foo.bar,
    resultFunc
  )

  const stateA = {
    foo: {
      bar: 2
    }
  }

  const stateB = {
    foo: {
      bar: 2
    }
  }

  deepEqualSelector(stateA)
  deepEqualSelector(stateB)

  expect(
    resultFunc.mock.calls.length
  ).toBe(1)
})

it('executes the result function twice when calling the selector two times with not equal objects', () => {
  const resultFunc = jest.fn()

  const deepEqualSelector = createDeepEqualSelector(
    ({ foo }) => foo.bar,
    resultFunc
  )

  const stateA = {
    foo: {
      bar: 2
    }
  }

  const stateB = {
    foo: {
      bazz: 2
    }
  }

  deepEqualSelector(stateA)
  deepEqualSelector(stateB)

  expect(
    resultFunc.mock.calls.length
  ).toBe(2)
})
