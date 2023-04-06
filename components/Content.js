import React from 'react'

function Content({ result }) {

    return (
        <div className="mt-10 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-7xl'>{result?.location?.name}</h1>
                    <h2 className='text-5xl pt-5'>{result?.current?.temp_c}&#8451;</h2>
                </div>
                <div>
                    <h2 className='text-2xl pt-5'>
                        Humidity : {result?.current?.humidity} <br/> Wind : {result?.current?.wind_kph} <br/> Feel Likes : {result?.current?.feelslike_c} <br/> Cloud : {result?.current?.cloud}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Content