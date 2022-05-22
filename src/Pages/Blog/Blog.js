import React from 'react';

const Blog = () => {
    return (
        <div className='my-16'>
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary text-3xl font-bold mb-2'>Blogs</h2>
            </div>
            <div className="flex flex-col w-full">
                <div className="grid p-4 card bg-base-200 rounded-box place-items-start">
                    <p className='text-xl font-bold mb-2'>1. How will you improve the performance of a React Application?</p>
                    <p><span className='text-xl font-bold text-primary'>Ans:</span></p>
                </div>
                <div className="divider"></div>
                <div className="grid p-4 card bg-base-200 rounded-box place-items-start">
                    <p className='text-xl font-bold mb-2'>2. What are the different ways to manage a state in a React application?</p>
                    <p><span className='text-xl font-bold text-primary'>Ans:</span></p>
                </div>
                <div className="divider"></div>
                <div className="grid p-4 card bg-base-200 rounded-box place-items-start">
                    <p className='text-xl font-bold mb-2'>3. How does prototypical inheritance work?</p>
                    <p><span className='text-xl font-bold text-primary'>Ans:</span></p>
                </div>
                <div className="divider"></div>
                <div className="grid p-4 card bg-base-200 rounded-box place-items-start">
                    <p className='text-xl font-bold mb-2'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                    <p><span className='text-xl font-bold text-primary'>Ans:</span></p>
                </div>
                <div className="divider"></div>
                <div className="grid p-4 card bg-base-200 rounded-box place-items-start">
                    <p className='text-xl font-bold mb-2'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                    <p><span className='text-xl font-bold text-primary'>Ans:</span></p>
                </div>
                <div className="divider"></div>
                <div className="grid p-4 card bg-base-200 rounded-box place-items-start">
                    <p className='text-xl font-bold mb-2'>6. What is a unit test? Why should write unit tests?</p>
                    <p><span className='text-xl font-bold text-primary'>Ans:</span></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;