import store from "./store"
import {Link} from "react-router-dom"
export default function Home() {
    const use=store.getState();
    console.log(use)

    
    return (
        <div>
        
        <h1>{use.user}</h1>
        <Link to="/send">Pay</Link>
        <h1>HomePage</h1>            
        </div>
    )
}
