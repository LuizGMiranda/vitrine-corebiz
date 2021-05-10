import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from "./components/Header";
import Newsletter from './components/Newsletter';
import Produts from './components/Produts';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Produts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
