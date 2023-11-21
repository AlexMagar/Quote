import './App.css'
import FetchData from './component/FetchData/FetchData'

function App() {

  //fetch api

  const content = (
    <div style={{maxWidth: '40rem'}}>
    <h1 className='text-message'>Message</h1>
    <hr />
    <FetchData />
    </div>
  )

  return content
}

export default App
