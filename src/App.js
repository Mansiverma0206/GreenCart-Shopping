import Products from "./Products";
import Topbar from "./Topbar";
import { Route , Routes } from "react-router-dom"
import Carts from './Cart'

export default function App()
{
  return<>
    <Topbar/>
    <hr/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/mycart" element={<Carts/>}/>
    </Routes>
    
  </>
}