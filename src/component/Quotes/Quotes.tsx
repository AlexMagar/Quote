
export type TQuoteArr = {
    _id?: string,
    author?: string,
    contents?: string,
}

export const Quotes = ({_id, author, contents}: TQuoteArr) => {

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
            {
                result.map((item) => (
                    console.log(item.content)
                ))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })

        return () => abortController.abort()
    }


  const content = (
    <>
        <p>Quotes</p>
        <button onClick={fetchHandler}>Fetch Data</button>
    </>
  )  

  return content
}
