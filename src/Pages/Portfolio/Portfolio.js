import React from 'react';
import about from '../../images/about.png'

const Portfolio = () => {
    return (
        <div className='my-16'>
            <h1 className='lg:text-5xl text-2xl font-bold text-primary  mb-16 text-center'>My Portfolio</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0 gap-10">
                    <img className='w-full lg:w-1/2' src={about} alt="" />
                    <div className='lg:w-1/2'>
                        <p className='lg:text-3xl text-xl font-bold mb-4'>Hello There! I'm <br /><strong className='text-primary'> Abu Kawsar</strong></p>
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
        </div>
    );
};

export default Portfolio;