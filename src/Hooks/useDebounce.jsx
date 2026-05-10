import React, { useEffect, useState } from 'react'

export default function useDebounce(value, delay=400) {
  const [debounceValue, setDebounceValue] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    })
    return () => clearTimeout(timer)
  },[value, delay])

  return debounceValue;
}
