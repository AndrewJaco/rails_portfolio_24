import { useState, useEffect } from 'react'

const useSearchParams = ( paramName, initialValue = '' ) => {
  const query = new URLSearchParams(window.location.search)
  const [paramValue, setParamValue] = useState(
    query.get(paramName) || initialValue)

  useEffect(() => {
    const newUrl = paramValue 
      ? `${window.location.pathname}?${paramName}=${paramValue}`
      : window.location.pathname

    window.history.pushState({}, '', newUrl)
}, [paramValue, paramName])

  return [paramValue, setParamValue]
}

export default useSearchParams;