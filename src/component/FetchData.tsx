import { ReactElement, useEffect, useState } from "react"

export type TAdviceSlip = {
    slip: {
        id: number,
        advice: string,
    }
}

const FetchData = async () => {

    //fetch data from API
    const abortController = new AbortController()
    const signal = abortController.signal
    const [loadin, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<TAdviceSlip | null>(null)

    const response = await fetch("https://api.adviceslip.com/advice")
    .then((Response) =>{
        if(!response.ok){
            throw new Error(`This is an HTTP error: The status is ${response.status}`)
        }
        return response.json()
    })
    .then((advice) => {
        setLoading(false)
        setData(advice)
    })
    console.log("Your advice: ",advice)

    useEffect(() => {
        FetchData()
    }, [])

    const content = (
        <>
            <p>Message will go here</p>
        </>
    )

    return content
}

export default FetchData