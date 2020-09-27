import { useEffect } from 'react'

const useScript = (url, type) => {


  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true;

    if (type) {
      script.type = type
    }

    document.body.appendChild(script)
    console.log('useScript')

    return () => {
      document.body.removeChild(script)
    }
  }, [type, url])
}

export default useScript