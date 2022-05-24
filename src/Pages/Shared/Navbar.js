import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <Link to='' className="" onClick={logout} >Sign Out</Link> : <Link to="/login">Login</Link>}</li>
        <li>{user ? <Link to='' className="">{user?.displayName}</Link> : ''}</li>
    </>
    return (
        <div className='sticky top-0 bg-white z-40 drop-shadow-xl '>
            <div className="navbar bg-base-30 max-w-7xl mx-auto px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold"><span className='text-primary'>LOOK</span>UP</Link>
                </div>
                <div className="navbar-end hidden lg:flex min-w-fit">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;