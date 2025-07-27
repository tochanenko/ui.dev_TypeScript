import React from 'react'

export default function useHover(): [boolean, { onMouseOut: () => void, onMouseOver: () => void }] {
  const [hovering, setHovering] = React.useState(false)

  const onMouseOver = () => setHovering(true)
  const onMouseOut = () => setHovering(false)

  return [hovering, {
    onMouseOut,
    onMouseOver
  }]
}