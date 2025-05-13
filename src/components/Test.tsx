import React from 'react'
import { useState } from 'react'

const Test: React.FC = () => {
    const [count, setCount] = useState<number>(0)

setTimeout(() => {
    setCount((prevCount) => prevCount + 1)
}, 1000)
  return (
    <div>Test</div>
  )
}

export default Test
