import styles from '@/styles/Home.module.css'
import SearchBar from '@/components/SearchBar'
import Content from '@/components/Content'
import { useEffect, useState } from 'react'
import { apiClient } from '@/shared/apiClient'
import Loader from '@/components/Loader'


export default function Home() {
    const [errMessage, setErrMsg] = useState("")
    const [searchInput, setSearchInput] = useState('')
    const [result, setResult] = useState({})
    const [loading,setLoading] = useState(true)

    const fetchWeather = (city) => {
        setLoading(true)
        apiClient.get(`/current.json?q=${city}`).then((res) => {
            setResult(res.data)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            setErrMsg(err.response?.data?.error?.message)
        })
    }
    useEffect(() => {
        if (searchInput) fetchWeather(searchInput)
    }, [searchInput])

    useEffect(()=>{
        if(errMessage){
            setTimeout(()=>{
                setErrMsg('')
            },2000)
        }
    },[errMessage])


    useEffect(()=>{
        if(loading) {
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }
    },[loading])

    return (
        <>
        {loading ? <Loader/> :<main className={styles.main}>
            <div className="flex flex-col w-full">
                <SearchBar setSearchInput={setSearchInput} />
                {errMessage && <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <strong className="font-bold">Error!</strong><br/>
                    <span className="block sm:inline">{errMessage}</span>
                   
                </div>}
                {Object.keys(result).length > 0 && <Content result={result}/>}
            </div>
        </main>}</>
    )
}