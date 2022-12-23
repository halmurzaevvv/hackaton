import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import News from './components/News/News';
import ImgList from './components/ImgList/ImgList';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Description />
      <News />
      <ImgList />
      <Footer />
    </div>
  );
}

export default App;
