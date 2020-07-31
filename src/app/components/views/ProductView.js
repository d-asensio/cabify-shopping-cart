import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../reducers'

import {
  Layout,
  Modal
} from '../atoms'

import {
  ProductPicture,
  ProductDescription
} from '../partials'

function ProductView () {
  const dispatch = useDispatch()

  const shownInfoProductId = useSelector(
    state => state.shownInfoProductId
  )

  const handleCloseButtonClick = () => {
    dispatch(
      actions.closeProductInfo()
    )
  }

  if (!shownInfoProductId) return null

  return (
    <Modal
      closable
      onCloseClick={handleCloseButtonClick}
    >
      <Layout>
        <ProductPicture id={shownInfoProductId} />
        <ProductDescription id={shownInfoProductId} />
      </Layout>
    </Modal>
  )
}

export default ProductView
