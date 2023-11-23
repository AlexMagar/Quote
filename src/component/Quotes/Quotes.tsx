import { useState } from "react"

export type TQuoteArr = {
    _id?: string,
    author?: string,
    contents?: string,
}

export const Quotes = () => {

    const [Quotes, setQuote] = useState<TQuoteArr | null>(null)
    const [data, setData] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const msg = "data"

    const fetchHandler = async () => {
        const abortController = new AbortController()
        const signal = abortController.signal

        await fetch("https://api.quotable.io/quotes/random", {signal})
        .then((response) => {
            if(!response.ok){
                throw new Error(`This is an Error ${response.status}`)
            }
            return response.json()
        })
        .then((result) =>{
            setData(result)
        })
        .catch((err) => {
            console.log(err.message)
        })

        return () => abortController.abort()
    }


  const content = (
    <>
        <p>{msg}</p>
        <button onClick={fetchHandler}>Fetch Data</button>
    </>
  )  

  return content
}
