import React from 'react'

function Loader() {
    return (
        <div className='loader-css'>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader