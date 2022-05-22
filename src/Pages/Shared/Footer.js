import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-secondary text-white py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="text-center">
                            <p className='m-0'> &copy; Copyright {year} LOOKUP Developed by A Student of <Link className='text-primary font-bold' to="/">P-HERO</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;