import './App.css';
import Header from './component/header/header';
import Home from './component/body/home';
import Gallery from './component/body/gallery';
import Footer from './component/header/footer';
import { Route, Routes } from 'react-router-dom';
// Import other components


const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
  
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

