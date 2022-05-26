import React from 'react';
import about from '../../images/about.png'
import carD from '../../images/carD.png'
import lub from '../../images/lub.png'
import abu from '../../images/abu.png'


const Portfolio = () => {
    return (
        <div className='my-16'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0 gap-10">
                    <img className='w-full lg:w-1/2' src={about} alt="" />
                    <div className='lg:w-1/2'>
                        <p className='lg:text-3xl text-xl font-bold mb-2 '>Hello There! I'm <br /><strong className='text-primary'> Abu Kawsar</strong></p>
                        <div>
                            <a className='btn btn-link pl-0 font-bold' href="https://www.linkedin.com/in/abu-kawsar-10118b228/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>Linkedin</a>
                            <a className='btn btn-link font-bold ' href="https://github.com/abukawsar47" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>Github</a>
                        </div>
                        <p className='mb-3'>
                            An aspiring MERN Stack Developer. I lost myself when I dive into the codes. I am a professional web designer and developer.</p>
                        <p className='mb-3'>
                            Recently I have completed Html5, Css3, Javascript, Bootstrap, Jquery, React JS, Next JS, Node JS, Express JS, and Mongo DB react and node js from Programming Hero.
                        </p>
                        <p className='mb-3'> I want to be a best junior developer this year</p>
                        <a className="btn btn-primary text-white mt-4" target="_blank" href='https://drive.google.com/file/d/1E_YqMwjeySO2-6c85m_V4uiYYyXFIhGL/view?usp=sharing'>View  Resume</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='lg:text-5xl text-2xl font-bold text-primary  mb-5 text-center'>My Portfolio</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="items-center">
                                <div className="avatar">
                                    <img src={carD} alt="" />
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-2xl font-bold'>Car Dealer</h2>
                                    <a href='https://assignment-11-client-side.web.app/' target='_blank' className='font-bold btn btn-link pl-0' >Live Link</a>
                                    <a href='https://github.com/abukawsar47/assignment-11-client-side' target='_blank' className='font-bold btn btn-link pl-0'>Code Client</a>
                                    <a href='https://github.com/abukawsar47/assignment-11-server-side' target='_blank' className='font-bold btn btn-link pl-0 pr-0'>Code Server</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="items-center">
                                <div className="avatar">
                                    <img src={lub} alt="" />
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-2xl font-bold'>Lub fit</h2>
                                    <a href='https://assignment-10-ak47.web.app/' target='_blank' className='font-bold btn btn-link' >Live Link</a>
                                    <a href='https://github.com/abukawsar47/assignment-10' target='_blank' className='font-bold btn btn-link'>Code Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="items-center">
                                <div className="avatar">
                                    <img src={abu} alt="" />
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-2xl font-bold'>Abu Sports</h2>
                                    <a href='https://abu-sports.netlify.app/' target='_blank' className='font-bold btn btn-link ' >Live Link</a>
                                    <a href='https://github.com/abukawsar47/assignment-11-client-side' target='_blank' className='font-bold btn btn-link'>Code Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;