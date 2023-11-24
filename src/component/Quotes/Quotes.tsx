import { useEffect, useState } from "react"

export type TQuoteArr = {
    _id?: string,
    author: string,
    content: string,
}


export const Quotes = () => {

    const [quote, setQuote] = useState<TQuoteArr | null>(null)
    const [author, setAuthor] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

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
            console.log(result)
            {
                result.map((item) => {
                    setQuote(item.content)
                    setAuthor(item.author)
                    setError(false)
                })
            }
        })
        .catch((err) => {
            setError(err.message)
            setQuote(null)
            setAuthor(false)
        })
        return () => abortController.abort()
    }

    useEffect(() => {
        fetchHandler()
    }, [])

  const content = (
    <>
        <p>{quote}</p>
        <p>{author}</p>
        <button onClick={fetchHandler}>Get Quote</button>
    </>
  )  

  return content
}
