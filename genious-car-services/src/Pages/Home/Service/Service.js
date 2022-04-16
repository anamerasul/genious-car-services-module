import React from 'react';

const Service = ({ service }) => {

    const { name, img, des, price } = service
    return (
        <div>

            <img style={{ "width": "200px" }} src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Service;