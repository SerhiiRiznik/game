 import React from "react";
import { NavLink } from "react-router-dom";
const Header = (props: any) => {
   return(
      <header className='header '>
         <nav className='navbar-dark bg-dark shadow rounded '>
            <div className='navbar-nav'>
               <ul className='nav'>
                  <NavLink to='/bestResult' activeClassName='active' className='p-3 nav-link'>Best Results</NavLink>
                  <NavLink to='/' activeClassName='active' className='p-3 nav-link'>Game</NavLink>
               </ul>
            </div>
         </nav>
      </header>
   )
};
export default Header
