import React from 'react'

function Search({setName, handleClick}) {
    return (
        <div>
            <div className="search">
                    <input type="text" placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
                    <button onClick={handleClick}>Search</button>
                </div>
        </div>
    )
}

export default Search
