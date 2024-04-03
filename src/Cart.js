import { useSelector } from "react-redux"
import ItemQty from "./ItemQty"
export default function Carts()
{
   const carts = useSelector(state=>state.carts.value)
   return<>
   <div className="container">
   <h1 className="alert alert-success text-center">Your Shopping Cart</h1>
   <hr/>
   <table className="table">
      <tr>
         <th>S.No</th>
         <th>Image</th>
         <th>Name</th>
         <th>Price</th>
         <th>Quantity</th>
         <th>Amount</th>
      </tr>
      {carts.map((item,index)=><tr>
         <td>{index+1}</td>
         <td><img src={item.product.image} height={100} width={150} /></td>
         <td>{item.product.name}</td>
         <td>{item.product.price}</td>
         <td><ItemQty item={item}/></td>
         <td>{item.product.price * item.qty}</td>
      </tr>)}
   </table>
   <hr/>
   <h3 className="text text-right alert alert-success">Total Amount :{carts.reduce((x,item)=>x+(item.product.price * item.qty),0)}</h3>
   </div>
   </>
}