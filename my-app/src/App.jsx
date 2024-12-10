import './App.css'
import Introduction from './Components/Introduction'
import Navbar from './Components/Navbar'
import MainContent from './Components/mainContent'
import Cards from './Components/Cards'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
        <Navbar/>
        <MainContent/>
        <Introduction/>
        <Cards/>
    </>
  )
}

export default App
