import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from "./components/Header";
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
