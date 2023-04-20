import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import './stylesPages/containerGrid.css'

function ContainerGrid() {
  return (
    <div className="container_grid">
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}
export default ContainerGrid