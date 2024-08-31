import Search from "./Search";
import {Link} from "react-router-dom";

export default function Header({cartItems}){
    return ( 
         <nav classNameName="navbar row  ">
              <div classNameName="col-12 col-md-3">
                
                 <div classNameName="navbar-brand">
                     <Link to="/" style={{ textDecoration: 'none' }}><img width="150px"/>
                     <div style={{fontSize:50, color:'GrayText'}}>Electro Store</div>
                     
                     </Link>
                 </div>
               </div>

                <div classNameName="col-12 col-md-6 mt-2 mt-md-0">
                    <Search/>
                </div>

                 <div className="d-flex justify-content-center align-items-end">
                     
                 <Link to={"/cart"} style={{ textDecoration: 'none' }}>
                      <div >
                      <span id="cart" className="ml-3 ">Cart</span>
                      <span className="ml-1" id="cart_count"> {cartItems.length} </span>
                      </div>
                 </Link>
                  </div>
          </nav>
    );
}