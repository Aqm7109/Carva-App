import './App.css'
import Introduction from './Components/Introduction'
import MainContent from './Components/mainContent'
import Cards from './Components/Cards'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
        <MainContent/>
        <Introduction/>
        <Cards/>
    </>
  )
}

export default App
