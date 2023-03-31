import React, { useEffect, useState } from 'react'
import { sum } from 'utils/common'

interface childProps {
  name: string
}
export function ChildComp({ name }: childProps) {

  const [sumResult, setSumResult] = useState<number>()

  useEffect(() => {
    setSumResult(() => sum(1, 2))
  }, [])

  return (
    <>
      <div>booking room: {name}</div>
      <div>{sumResult}</div>
    </>
  )
}