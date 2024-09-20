import './App.css';
import Header from './component/header/header';
import Home from './component/body/home';
import Footer from './component/header/footer';
const App = () => {
  return (
    <div className="App">
      <Header /> 
      <Home />
      <Footer />
    </div>
  );
}

export default App;
