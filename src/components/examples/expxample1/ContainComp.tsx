import React, { useState } from 'react'
import { ChildComp } from './ChildComp'

export function ContainComp() {
  const [showChild, setShowChild] = useState(false)
  const handleClick = () => setShowChild(!showChild)
  return (
    <>
      {showChild && <ChildComp name='ecoffee' />}
      <div>Hello world</div>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}