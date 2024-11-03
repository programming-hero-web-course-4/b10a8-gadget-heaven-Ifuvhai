
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  )
}

export default App
