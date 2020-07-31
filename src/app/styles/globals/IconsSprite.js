import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

function IconsSprite () {
  const { iconography } = useContext(ThemeContext)

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      display='none'
    >
      {Object.entries(iconography.glyphs)
        .map(([name, Glyph], key) => (
          <g
            id={`ic-${name}`}
            key={key}
          >
            <Glyph />
          </g>
        )
        )}
    </svg>
  )
}

export default IconsSprite
