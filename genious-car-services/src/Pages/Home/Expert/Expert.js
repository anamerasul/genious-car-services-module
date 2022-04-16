import React from 'react';

const Expert = ({ expert }) => {

    console.log(expert)

    const { name, img } = expert
    return (
        <div className="border-1 shadow-md p-1">

            <img className="w-3/4 mx-auto mb-4" src={img} alt="" />

            <h2 className="text-4xl text-center my-4"> {name}</h2>

        </div>
    );
};

export default Expert;