import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import MyRoutes from './MyRoutes';



function App() {
  return (
    <div className="App">
      <NavBar />
      <MyRoutes />
    </div>
  );
}

export default App;
