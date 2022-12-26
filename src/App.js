import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import MyRoutes from './MyRoutes';
import ProductContextProvider from './Context/ProductContextProvider';
import CartContextProvider from './Context/CartContextProvider';



function App() {
  return (
    <div className="App">
      <NavBar />
      <CartContextProvider>
        <ProductContextProvider>
          <MyRoutes />
        </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
