import{Route, Routes} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutPages } from './pages/AboutPage';
import { ProductPage } from './pages/ProductsPage';

function App() {
  return(
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductPage />}/> 
        <Route path='/about' element={<AboutPages />}/> 
      </Routes>
    </>
  )
}

export default App;
