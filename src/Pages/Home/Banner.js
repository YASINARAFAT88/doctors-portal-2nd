import React from 'react';
import chair from '../../doctors-portal-resources/assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;