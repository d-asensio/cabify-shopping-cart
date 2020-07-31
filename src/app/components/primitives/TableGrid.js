import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const TableGrid = styled.div`
  ${({ columnsTemplate }) => setColumnsTemplate(columnsTemplate)}
  ${({ columnAlignments }) => setColumnAlignments(columnAlignments)}
`

const Row = styled.div`
  display: grid;

  align-items: center;
  justify-items: center;

  margin-bottom: 32px;
`

const setColumnsTemplate = columnsTemplate => css`
  > ${Row} {
    grid-template-columns: ${columnsTemplate.join(' ')};
  }
`

const setColumnAlignments = columnAlignments => css`
  > ${Row} {
    ${columnAlignments.map((alignment, i) => css`
      > *:nth-child(${i + 1}) {
        justify-self: ${
          {
            left: 'start',
            right: 'end'
          }[alignment] || 'center'
        };
      }
    `)}
  }
`

TableGrid.Row = Row

TableGrid.defaultProps = {
  columnsTemplate: ['auto'],
  columnAlingments: []
}

TableGrid.propTypes = {
  columnsTemplate: PropTypes.arrayOf(
    PropTypes.string
  ),
  columnAlingments: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default TableGrid
