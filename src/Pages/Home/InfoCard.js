import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl pl-5 py-3 ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;