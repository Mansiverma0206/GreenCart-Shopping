import DummyData from "./DummyData"
import { useDispatch } from "react-redux"
import  { addProduct } from "./ReduxData/CartSlice"
import { useSelector } from "react-redux"
import ItemQty from "./ItemQty"
export default function Products()
{
   const carts = useSelector(state=>state.carts.value)
   const dispatch = useDispatch()
   const add = (ob)=>{
      dispatch(addProduct(ob))
   }
   return<>
      <div className="row">
         {DummyData.map(ob=><div className="col-lg-3 col-md-3 text-center">
            <img src={ob.image} height={200} width={250} />
            <br/>
            <h3 className="text-success"><b>{ob.name}</b></h3>
            <h6 className="text-success">Rs : {ob.price}</h6>
            {carts.some(item=>item.product.pid==ob.pid)?<>
            <ItemQty item={carts.find(ct=>ct.product.pid==ob.pid)}/>
            </>:
            <button className="btn btn-success" onClick={()=>add(ob)}>  
            <i className="fas fa-shopping-cart"></i>
            &nbsp;Add to cart
            </button>}
         </div>)}

      </div>
   </>
}