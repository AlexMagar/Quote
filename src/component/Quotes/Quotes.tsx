import { useEffect, useState } from "react"

export type TQuoteArr = [{
    author: string,
    content: string,
}]

export const Quotes = () => {

    const [quote, setQuote] = useState<TQuoteArr | null>(null)
    const [author, setAuthor] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const data = quote?.[0]?.content

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
                result.map((item: any) => {
                    setQuote(item.content)
                    setAuthor(item.author)
                    setError(null)
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
    console.log("hello data:",data)
    useEffect(() => {
        fetchHandler()
    }, [])

  const content = (
    <>
        {
            error ? (
                <p>Error: (error.message)</p>
            ): (
                <div>
                    <p className="quote">{data}</p>
                    <p className="author">- {author}</p>
                    <button onClick={fetchHandler}>Get Quote</button>
                </div>
            )
        }
    </>
  )  

  return content
}
