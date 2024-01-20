import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import { HomePg, AboutPg, CartPg, ServicePg, ShopPg, ContactPg } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify"
import CartSuccessPg from "./pages/Status/CartSuccessPg";


// https://eatsy.bold-themes.com/burger/



const router = createBrowserRouter([
  {
    path: "*",
    Component: Root
  }
])

function Root() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/cart" element={<CartPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/service" element={<ServicePg />} />
        <Route path="/shop" element={<ShopPg />} />
        <Route path="/cart-success" element={<CartSuccessPg />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App