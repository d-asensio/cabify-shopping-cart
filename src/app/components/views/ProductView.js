import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../reducers'
import { getShownInfoProductId } from '../../selectors'

import {
  Layout,
  Modal
} from '../primitives'

import {
  ProductPicture,
  ProductDescription
} from '../partials'

function ProductView () {
  const dispatch = useDispatch()

  const shownInfoProductId = useSelector(
    getShownInfoProductId
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
