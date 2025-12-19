import { BrowserRouter, Routes,Route} from 'react-router'
import Navbar from './components/Navbar/Navbar.jsx'   
import Home from './components/Home/Home.jsx'                                 
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'  
import Contact from './components/Contact/Contact.jsx'
import Portofolio from './components/Portofolio/Portofolio.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
function App() {

 
  return (
    <>
   
  <BrowserRouter>
   <Navbar />
  <Routes>
<Route path='/' element={ <Home />} />
<Route path='/about' element={ <About />} />
<Route path='/portfolio' element={ <Portofolio />} />
<Route path='/contact' element={ <Contact />} />
<Route path='*' element={ <NotFound />} />    
  </Routes>
   <Footer />
  </BrowserRouter>
   
    </>
  )
}

export default App
