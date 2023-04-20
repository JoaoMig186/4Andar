import Acessoria from "../Pages/Acessoria"
import CardsBox from "../Pages/CardsBox"
import LandingPage from "../Pages/LandingPage"
import './stylesComponents/main.css'

function Main() {
  return (
    <main className="main">
        <LandingPage/> 
        <CardsBox/>
        <Acessoria/>
    </main>
  )
}

export default Main