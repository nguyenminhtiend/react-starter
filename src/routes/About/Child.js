import React, { memo } from 'react'

const Child = memo(() => {
  console.log('re-render child component.')
  return (
    <div>
      <p>child component which has nothing to do with parent count</p>
    </div>
  )
})

export default Child
