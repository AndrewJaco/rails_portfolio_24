import { useRef } from 'react'
import PropTypes from 'prop-types'

function SearchBar({ value, onSearchChange, onImmedianteChange }) {
  const searchDebounceRef = useRef(null)

  const handleSearchChange = (e) => {
    const searchValue = e.target.value

    // update the search term immediately
    onImmedianteChange(searchValue)

    //clear the existing timeout if it exists
    if(searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current)
    }

    // set the timeout for debounce
    searchDebounceRef.current = setTimeout(() => {
      onSearchChange(searchValue)
    }, 500)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Search...'
        value={value}
        onChange= {handleSearchChange}
      />
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onImmedianteChange: PropTypes.func.isRequired
}

export default SearchBar