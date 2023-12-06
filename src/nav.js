import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
const Navbar = () => {
    return(
     <nav className='navbar navbar-expand-sm navbar-dark main '>
        <div className='container-fluid'>
            <a className='navbar-brand' href='/'>
            <img src='./images/SmartHr_Logo.png'
                alt='logo' width="30px" height="30px" className="d-inline-block align-top first-logo"/> </a>
               <div className='navbar-brand dream-tec'>
                <i class="fa-solid fa-bars-staggered mr-2"></i>   
               Dream Technologies
                </div>
           
            
           
            <ul className="navbar-nav ml-auto" navbar-dark bg-danger>
            <li className='nav-item'>
              <div className='cont'>
            <form className='form-inline my-2 my-lg-0 ml-auto'>
            <input  className='form-control rounded-pill pos' type='search' placeholder='search here'/>
                <div className="input-group-append pos1 " type="submit">
                <span className=''><i class="fa-solid fa-magnifying-glass"></i> </span>
            </div>
            </form>
            </div>
            </li>
            <li className="nav-item dropdown nav-list1">
            <a
              className="nav-link dropdown-toggle" href="/"  data-toggle="dropdown">
              <i class="fa-solid fa-flag"></i> English </a>
            <div className="dropdown-menu" >
              <a className="dropdown-item" href="/">English </a>
              <a className="dropdown-item" href="/">Kannada</a>
            </div>
          </li>
            <li className="nav-item nav-list2"><a className="nav-link" href="/">
              <i className="fa fa-bell"></i></a>
          </li>
          <li className="nav-item nav-list3">
            <a className="nav-link" href="/">
            <i class="fa-regular fa-comment"></i>
            </a>
          </li>
          <li className="nav-item dropdown nav-list4">
            <a
              className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
              <i class="fa-solid fa-user-tie"></i> Admin </a>
            <div className="dropdown-menu" >
              <a className="dropdown-item" href="/">Profile</a>
              <a className="dropdown-item" href="/">Settings</a>
              
              <a className="dropdown-item" href="/">Logout</a>
            </div>
          </li>
        </ul>
        </div>
     </nav>

 )     
}
export default Navbar