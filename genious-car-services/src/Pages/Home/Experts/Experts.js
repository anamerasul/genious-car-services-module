import React from 'react';
import Expert from '../Expert/Expert';

import expert1 from './../../../Images/experts/expert-1.jpg'
import expert2 from './../../../Images/experts/expert-2.jpg'
import expert3 from './../../../Images/experts/expert-3.jpg'
import expert4 from './../../../Images/experts/expert-4.jpg'
import expert5 from './../../../Images/experts/expert-5.jpg'
import expert6 from './../../../Images/experts/expert-6.png'


const experts = [

    { id: 1, name: "will smith1", img: expert1 },
    { id: 2, name: "will smith2", img: expert2 },
    { id: 3, name: "will smith3", img: expert3 },
    { id: 4, name: "will smith4", img: expert4 },
    { id: 5, name: "will smith5", img: expert5 },
    { id: 6, name: "will smith6", img: expert6 }


]

const Experts = () => {
    return (
        <div className="container mx-auto px-12">
            <h2 className="text-5xl text-center my-8">Experts ({experts.length})</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {

                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    >


                    </Expert>)
                }
            </div>


        </div>
    );
};

export default Experts;