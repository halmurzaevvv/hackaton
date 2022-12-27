import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Admin/Edit/Edit";
import Cart from "./components/Cart/Cart";
import Make from "./components/Make/Make";
import MenuList from "./components/Menu/MenuList/MenuList";
import OrderForm from "./components/OrderForm/OrderForm";
import Reviews from "./components/Reviews/Reviews";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";

const PUBLIC_ROUTES = [
  { link: "/", element: <Home />, id: 1 },
  { link: "/admin", element: <Admin />, id: 2 },
  { link: "/products", element: <Products />, id: 4 },
  { link: "/edit/:id", element: <Edit />, id: 5 },
  { link: "/cart", element: <Cart />, id: 6 },
  { link: "/menu", element: <MenuList />, id: 7 },
  { link: "/order", element: <OrderForm />, id: 10 },
  { link: "/reviews", element: <Reviews />, id: 8 },
  { link: "/make", element: <Make />, id: 9 },
];

const MyRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
