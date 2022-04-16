import React from 'react';

const Service = ({ service }) => {

    const { name, img, des, price } = service
    return (
        <div className='border-2 shadow-md p-10'>

            <img className="w-full px-4 py-8" src={img} alt="" />
            <h2 className="text-3xl  text-center">{name}</h2>

            <p className="text-center text-xl my-2">price :{price}</p>

            <button className="text-center ml-28 rounded-full px-12 py-4 my-4 bg-blue-600"> Book {name}</button>
        </div>
    );
};

export default Service;