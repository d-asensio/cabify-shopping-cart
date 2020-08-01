import React from 'react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { render } from '@testing-library/react'

import fs from 'fs'

import App from '..'

function readJsonFile (filePath) {
  const fileContents = fs.readFileSync(filePath)
  return JSON.parse(fileContents)
}

const server = setupServer(
  rest.get('http://test.host/data/products.json', async (req, res, ctx) => {
    const productsData = readJsonFile('./data/products.json')

    return res(
      ctx.json(productsData)
    )
  }),
  rest.get('http://test.host/data/discounts.json', async (req, res, ctx) => {
    const discountsData = readJsonFile('./data/discounts.json')

    return res(
      ctx.json(discountsData)
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('do not fail at first render', () => {
  render(<App />)
})
