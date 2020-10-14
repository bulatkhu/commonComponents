import { useEffect } from 'react'

const useLink = (url, type) => {


  useEffect(() => {
    const link = document.createElement('link')

    link.href = url
    link.rel = 'stylesheet'
    link.media = 'screen'

    if (type) {
      link.type = type
    }

    document.body.appendChild(link)
    console.log('useScript')

    return () => {
      document.body.removeChild(link)
    }
  }, [type, url])
}

export default useLink