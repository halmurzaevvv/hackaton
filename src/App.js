import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import MyRoutes from './MyRoutes';
import ProductContextProvider from './Context/ProductContextProvider';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductContextProvider>
        <MyRoutes />
      </ProductContextProvider>

    </div>
  );
}

export default App;
