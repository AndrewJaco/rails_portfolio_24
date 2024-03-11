import { useSearchParams } from 'react-router-dom'

const useUrlSearchParams = ( paramName, initialValue = '' ) => {
  const [searchParams, setSearchParams] = useSearchParams()

  // Get the value of the search param directly from the URL
  const paramValue = searchParams.get(paramName) || initialValue

  // Set the value of the search param directly in the URL
  const setParamValue = (value) => {
    if(value) {
      setSearchParams({ ...Object.fromEntries(searchParams), [paramName]: value })
    } else {
      //remove the parameter if it is falsy
      searchParams.delete(paramName)
      setSearchParams(searchParams)
    }
  }

  return [paramValue, setParamValue]
}

export default useUrlSearchParams;