import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 16px;
  
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
`

const Heading = styled.h3`
  font-size: 12px;
  line-height: 16px;

  font-weight: 300;
  letter-spacing: 0;

  text-transform: uppercase;

  color: #717285;

  margin-bottom: 16px;
`

const List = styled.ul`
  list-style: none;

  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`

const DiscountName = styled.span`
  font-size: 14px;

  line-height: 17px;

  color: #212240;
`

const DiscountAmount = styled.span`
  font-size: 14px;
  font-weight: 700;

  line-height: 17px;
  white-space: nowrap;

  color: #212240;
`

function DiscountList ({ className, discounts }) {
  return (
    <Wrapper
      className={className}
    >
      <Heading>Discounts</Heading>
      <List>
        {discounts.map(({ name, amount }, key) => (
          <ListItem key={key}>
            <DiscountName>{name}</DiscountName>
            <DiscountAmount>{amount} €</DiscountAmount>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

DiscountList.defaultProps = {
  discounts: []
}

export default styled(DiscountList)``
