import './App.css'
import FetchData from './component/FetchData'

function App() {

  //fetch api

  const content = (
    <>
    <h1 className='message'>Message</h1>
    <hr />
    <FetchData />
    </>
  )

  return content
}

export default App
