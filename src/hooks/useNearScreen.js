import { useState, useEffect, useRef } from 'react'

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver
      : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const {isIntersecting} = entries[0]
        if (isIntersecting) {
            console.log('Entry')
          setShow(true)
          observer.disconnect()
        }
      },
      { threshold: 1}
      )
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
