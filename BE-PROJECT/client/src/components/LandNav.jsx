// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {
//   return (
//     <div className='Navbar fixed top-0 right-0 z-[999] bg-transparent w-screen backdrop-blur-sm ' >
//         <div className='flex items-center justify-between'>
//             <div className='h-20 w-20 z-50 ml-5'>
//                 <img src="./logo3.png" alt="Logo" />
//             </div>
//             <div className='flex items-center justify-between gap-16 mr-10'>
//                 <Link to="/login">
//                     <h2 className='hover:scale-125 hover:text-blue-400 duration-200 cursor-pointer'>Login</h2>
//                 </Link>
//                 <Link to="/signup">
//                     <h2 className='hover:scale-125 hover:text-blue-400 duration-200 cursor-pointer'>Sign up</h2>
//                 </Link>
//             </div>
//         </div>   
//     </div>
//   )
// }

// export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/userSlice'; // Ensure this path is correct
import { Avatar } from '@mui/material'; // Import Avatar component

function NavBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser); // Get current user from Redux store

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <div className='Navbar fixed top-0 right-0 z-[999] bg-transparent w-screen backdrop-blur-sm'>
      <div className='flex items-center justify-between'>
        <div className='h-20 w-20 z-50 ml-5'>
          <img src="./logo3.png" alt="Logo" />
        </div>
        <div className='flex items-center justify-between gap-6 mr-4'>
          {currentUser ? (
            <>
              <Link to="/profile" className='flex items-center'>
                {/* Display Avatar with the first letter of the user's name or the user's image */}
                <Avatar className='ml-12' src={currentUser.img}>{currentUser.name[0]}</Avatar>
                {/* <h2 className='hover:scale-125 hover:text-blue-400 duration-200 cursor-pointer'>
                  {currentUser.name}
                </h2> */}
              </Link>
              <h2
                className='hover:scale-125 hover:text-blue-400 duration-200 cursor-pointer mr-16'
                onClick={handleLogout}
              >
                Logout
              </h2>
            </>
          ) : (
            <>
              <Link to="/login">
                <h2 className='hover:scale-125 hover:text-blue-400 duration-200 cursor-pointer'>Login</h2>
              </Link>
              <Link to="/signup">
                <h2 className='hover:scale-125 hover:text-blue-400 duration-200 cursor-pointer'>Sign up</h2>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
