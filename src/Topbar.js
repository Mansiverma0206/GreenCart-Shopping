import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
export default function Topbar() 
{
 const cartSize = useSelector(state=>state.carts.value.length)
   return <div className="container-fluid">
      <div className="container">
         <div className="row text-center alert-success">
            <div className="col-lg-10 col-md-10">
               <h1>GreenMart Shop</h1>
            </div>
            <div className="col-lg-2 col-md-2 text-success">
            <Link to="/"><i class="fas fa-home text-success"></i></Link>&nbsp;&nbsp; 
            <Link to="/mycart"><i class="fas fa-shopping-cart text-success"></i></Link>&nbsp;&nbsp; 
            <b>{cartSize>0?cartSize:''}</b>
            </div>
         </div>
      </div>

   </div>
} 