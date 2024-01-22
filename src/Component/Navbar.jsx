import  { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import HotelLogo from '../assets/logo/hotelLogo.jpg'
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = ({children}) => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () =>{
    logOut()
    .then(() =>{})
    .catch((error) =>{
      console.log(error.message)})
  }
 const navLinks =<>
<li>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
</li>

<li> <NavLink
  to="/rooms"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Rooms
</NavLink>
</li>
{
  user?.email ? <>
<li> <NavLink
  to="/mybooking"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  My Booking
</NavLink>
</li> 
<li> <button onClick={handleLogout} className="btn ">Logout</button> </li></>
:
<li> <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink>
</li>

}

 
</>

 return (
  <div className='w-full  h-full'>
  
<div className="   bg-opacity-40 ">
    <div className="navbar h-28 max-w-5xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
<div className=''>
 <img className="lg:mr-5 lg:w-24 md:w-16 w-10 h-14" src={HotelLogo} alt="" />
</div>
<h1 className="text-3xl font-semibold text-sky-500">Hotel Sairu</h1>         
  </div>
  <div className="navbar-center hidden lg:flex">
    
    <ul className="menu menu-horizontal px-1">
   {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    {/* <button onClick={changeTheme} className="w-8"><img src={darkMode} alt="" /></button> */}
{/*    
  {
      user ? <>
       <div>
      <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" />
      <p>{user.displayName}
      </p> 
        </div>
    <button onClick={handleLogout} className="btn bg-blue-600">Logout</button> 
    
    </>  : <Link to={"/login"}>
      <button className="btn bg-blue-900 text-white">Login</button>
    </Link>
    } */}
   
  </div>
</div>
      </div>

  </div>
 );
};

export default Navbar;