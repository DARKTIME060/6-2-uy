
import ContextProvider from './context/Context';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Header from './components/Header';
import './global.css';


function App() {

  return (
    <ContextProvider>
      <Navbar />
      <Header/>
      <Main/>
      <Footer />
    </ContextProvider>
  )
}

export default App