import './App.css'
import FetchData from './component/FetchData/FetchData'
import { Quotes } from './component/Quotes/Quotes'

function App() {

  const content = (
    <div className='content' onScroll={()=> console.log("Scrolled")}>
    <h1 className='text-message'>Life Advice</h1>
    <hr />
    <FetchData />
    <hr/>
    <Quotes/>
    </div>
  )

  return content
}

export default App
