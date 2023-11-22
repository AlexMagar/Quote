import './App.css'
import FetchData from './component/FetchData/FetchData'

function App() {

  const content = (
    <div className='content' onScroll={()=> console.log("Scrolled")}>
    <h1 className='text-message'>Life Advice</h1>
    <hr />
    <FetchData />
    </div>
  )

  return content
}

export default App
