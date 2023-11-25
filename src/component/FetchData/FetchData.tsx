import {useEffect, useState } from "react"
import Spinner from "../Spinner"

export type TAdviceSlip = {
    slip: {
        id: number,
        advice: string,
    }
}

const FetchData = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<TAdviceSlip | null>(null)
    const [error, setError] = useState<string | null>(null)

    const slip = data?.slip?.advice

    //fetch data from API
    const fetchHandler = async () => {
        const abortController = new AbortController()

        // increase the performance by cancling the previous request and putting into the loading stage, so that it is not constantly sending the request one after another
        // if the new request is made while another one is still going, it will cancle the previous request and focus on new request
        const signal = abortController.signal

        setLoading(true)
        setError(null)

        await fetch("https://api.adviceslip.com/advice", {signal})
        .then((response) => {
            if(!response.ok){
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
            return response.json();
        })
        .then((advice) => {
            setLoading(false)
            setError(null)
            setData(advice)
        }) 
        .catch((error) => {
            setError(error.message)
            setData(null)
            setLoading(false)
        })
        return () => abortController.abort()
    }
    useEffect(() => {
        fetchHandler()
    }, [])

    const content = (
        <>
            {
                loading ? (
                    <Spinner />
                ) : error ? (
                    <p>Error: (error.message)</p>
                ) : (
                    <div>
                        <p className="main-message" >"{slip}"</p>
                        <button
                            onClick={fetchHandler}
                            title={'Refresh the advice'}
                            type={'button'}
                        >
                            Refresh
                        </button>
                    </div>
                )
            }
        </>
    )

    return content
}

export default FetchData