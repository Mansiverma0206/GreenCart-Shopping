import { useDispatch } from "react-redux"
import { incrementQty , decrementQty ,dltProduct} from "./ReduxData/CartSlice"

export default function ItemQty(props)
{
   const dispatch = useDispatch()
   const increment = () => {
      dispatch(incrementQty({pid:props.item.product.pid}))
   }
   const decrement = () => {
      dispatch(decrementQty({pid:props.item.product.pid}))
   }
   const deleteItem = () => {
      dispatch(dltProduct({pid:props.item.product.pid}))
   }
   return<div className="item">
     <button className="btn btn-success" onClick={decrement}><b>-</b></button>&nbsp;&nbsp;
     <b >{props.item.qty}</b>&nbsp;&nbsp;
     <button className="btn btn-success" onClick={increment}><b>+</b></button>&nbsp;&nbsp;
     <button className="btn btn-success" onClick={deleteItem}><i class="fas fa-trash"></i></button>
   </div>
}