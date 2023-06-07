import {useSelector, useDispatch} from "react-redux"
import {ordered, restored} from "../icecream/icecreamSlice";

const IcecreamView = () => {
    const dispatch = useDispatch();
    const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
    return (
        <div>
            <h2>Number of Icecreams - {numOfIcecream}</h2>
            <button onClick={()=>dispatch(ordered())}>Order icecream</button>
            <button onClick={()=> dispatch(restored(3))}>Restock ice cream</button>
        </div>
    )
}

export default IcecreamView