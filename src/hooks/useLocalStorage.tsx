import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log('ls err', error);
      return initialValue
    }
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [value, setValue])

  return [value, setValue] as const
}