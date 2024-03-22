import Navbar from './components/navbar/Navbar'
import HomePage from './components/routes/homePage/homePage'
import './layout.scss'

function App() {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  )
}

export default App