import React from 'react'

function SearchBar({ setSearchInput }) {

    // on enterclick
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchInput(event.target.value)
            event.target.value = ""
        }
    }

    return (
        <div className="mb-4">
            <input
                className="shadow appearance-none h-16 border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city_name"
                type="text"
                placeholder="Enter City Name."
                onKeyDown={handleKeyDown}
            />
            <span className='text-white text-2xl mt-4'>Press Enter to search..</span>
        </div>
    )
}

export default SearchBar;