import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import { getGrandTotal } from '../../selectors'

import { Button } from '../primitives'

const PriceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 24px;
`

const Label = styled.span`
  font-size: 14px;

  line-height: 17px;
  white-space: nowrap;

  color: #212240;
`

const GrandTotal = styled.span`
  font-size: 20px;
  font-weight: 700;

  line-height: 17px;
  white-space: nowrap;

  color: #212240;

  text-transform: uppercase;
`

function TotalSummary ({ onSelectionConfirmation }) {
  const grandTotal = useSelector(
    getGrandTotal
  )

  return (
    <div>
      <PriceDetails>
        <Label>TOTAL COST</Label>
        <GrandTotal>{grandTotal} €</GrandTotal>
      </PriceDetails>
      <Button
        onClick={onSelectionConfirmation}
      >
        Checkout
      </Button>
    </div>
  )
}

TotalSummary.propTypes = {
  onSelectionConfirmation: PropTypes.func
}

export default TotalSummary
