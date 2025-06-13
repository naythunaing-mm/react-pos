import Container from "./components/Container"
import CategorySection from "./components/CategorySection"
import Header from "./components/Header"
import ProductSection from "./components/ProductSection"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter basename="/react-pos">
        <Header />
        <Container>

        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
