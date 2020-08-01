import React from 'react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import '@testing-library/jest-dom/extend-expect'

import { render, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

it('renders the product list', async () => {
  const { getByText } = render(<App />)

  await waitFor(() => {
    getByText('Shirt')
    getByText('Mug')
    getByText('Cap')
  })
})

it('pick one of each products using the + button', async () => {
  const { findAllByRole, getByLabelText, findByText } = render(<App />)

  const [
    shirtPlusButton,
    mugPlusButton,
    capPlusButton
  ] = await findAllByRole('button', { name: '+' })

  await userEvent.click(shirtPlusButton)
  await userEvent.click(mugPlusButton)
  await userEvent.click(capPlusButton)

  const shirtInput = getByLabelText('Shirt quantity')
  const mugInput = getByLabelText('Mug quantity')
  const capInput = getByLabelText('Cap quantity')

  await findByText('3 Items')

  expect(shirtInput).toHaveAttribute('value', '1')
  expect(mugInput).toHaveAttribute('value', '1')
  expect(capInput).toHaveAttribute('value', '1')
})

it('reset selected using the - button', async () => {
  const { findAllByRole, getByLabelText, findByText } = render(<App />)

  const [
    shirtMinusButton,
    mugMinusButton,
    capMinusButton
  ] = await findAllByRole('button', { name: '-' })

  await userEvent.click(shirtMinusButton)
  await userEvent.click(mugMinusButton)
  await userEvent.click(capMinusButton)

  const shirtInput = getByLabelText('Shirt quantity')
  const mugInput = getByLabelText('Mug quantity')
  const capInput = getByLabelText('Cap quantity')

  await findByText('0 Items')

  expect(shirtInput).toHaveAttribute('value', '0')
  expect(mugInput).toHaveAttribute('value', '0')
  expect(capInput).toHaveAttribute('value', '0')
})

it('pick multiple items by writting the quantity', async () => {
  const { findByLabelText, findByText } = render(<App />)

  const shirtInput = await findByLabelText('Shirt quantity')
  const capInput = await findByLabelText('Cap quantity')

  fireEvent.change(shirtInput, { target: { value: '2' } })
  fireEvent.change(capInput, { target: { value: '3' } })

  await findByText('5 Items')

  expect(
    shirtInput
  ).toHaveAttribute('value', '2')

  expect(
    capInput
  ).toHaveAttribute('value', '3')
})

it('pick multiple items that are entitled to a discount', async () => {
  const { findByLabelText, findByText } = render(<App />)

  const shirtInput = await findByLabelText('Shirt quantity')
  const mugInput = await findByLabelText('Mug quantity')
  const capInput = await findByLabelText('Cap quantity')

  fireEvent.change(shirtInput, { target: { value: '3' } })
  fireEvent.change(mugInput, { target: { value: '2' } })
  fireEvent.change(capInput, { target: { value: '0' } })

  await findByText('2x1 Mug offer')
  await findByText('x3 Shirt offer')
})

it('clear selection by writting', async () => {
  const { findByLabelText, findByText } = render(<App />)

  const shirtInput = await findByLabelText('Shirt quantity')
  const mugInput = await findByLabelText('Mug quantity')
  const capInput = await findByLabelText('Cap quantity')

  fireEvent.change(shirtInput, { target: { value: '0' } })
  fireEvent.change(mugInput, { target: { value: '0' } })
  fireEvent.change(capInput, { target: { value: '0' } })

  await findByText('0 Items')

  expect(
    shirtInput
  ).toHaveAttribute('value', '0')

  expect(
    mugInput
  ).toHaveAttribute('value', '0')

  expect(
    capInput
  ).toHaveAttribute('value', '0')
})

it('open product modal and add to cart', async () => {
  const { findByAltText, findByText, findByLabelText } = render(<App />)

  const shirtImage = await findByAltText('Shirt thumbnail')
  const shirtInfoButton = shirtImage.closest('button')

  await userEvent.click(shirtInfoButton)

  const addToCartButton = await findByText('Add to cart')

  await userEvent.click(addToCartButton)

  const shirtInput = await findByLabelText('Shirt quantity')

  expect(
    shirtInput
  ).toHaveAttribute('value', '1')
})

it('open product modal and close', async () => {
  const { findByAltText, findByLabelText } = render(<App />)

  const shirtImage = await findByAltText('Shirt thumbnail')
  const shirtInfoButton = shirtImage.closest('button')

  await userEvent.click(shirtInfoButton)

  const closeModalButton = await findByLabelText('Close modal')

  await userEvent.click(closeModalButton)

  const shirtInput = await findByLabelText('Shirt quantity')

  expect(
    shirtInput
  ).toHaveAttribute('value', '1')
})
