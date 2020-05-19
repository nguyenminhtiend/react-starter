import React, { useState } from 'react'
import Child from './Child'

const About = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const incrementOtherCounter = () => {
    setOtherCounter(otherCounter + 1)
  }

  console.log('re-render parent component')
  return (
    <main>
      Count: {count}
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={incrementOtherCounter}>
        incrementOtherCounter
      </button>
      <Child />
    </main>
  )
}

export default About
