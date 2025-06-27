import { Link } from "react-router-dom"
import MyCart from "../components/MyCart"
const GroceryPage = () => {
    return <>
        <Link to="/my-cart" >
            <MyCart />
        </Link >
    </>
}
export default GroceryPage