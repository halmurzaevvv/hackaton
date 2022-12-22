import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Description />
    </div>
  );
}

export default App;
