import React from 'react';
import './Services.css'
import repair1 from './../../../Images/repair1.png'
import UseRepairdataHooks from '../../../Hooks/UseRepairdataHooks';
import Service from '../Service/Service';


// const services = [
//     { id: 1, name: 'oil change', price: 100, description: ' des 1', img: 'https://i.ibb.co/HPQ0hn9/car-mechanic-changing-wheels-car.jpg' },
//     { id: 2, name: 'oil change 2', price: 200, description: 'des 2', img: ' https://i.ibb.co/L8JLFJ4/chad-kirchoff-xe-e69j6-Ds-unsplash.jpg' },
//     { id: 3, name: 'oil change 3', price: 300, description: ' des 3', img: 'https://i.ibb.co/FwGsptZ/kate-ibragimova-b-EGTs-OCn-Hro-unsplash.jpg' },
//     { id: 4, name: 'oil change 4', price: 500, description: ' des 4', img: 'https://i.ibb.co/MpkYGNN/laurel-and-michael-evans-c-KDq7nx-Vd-Q-unsplash.jpg' },
//     { id: 5, name: 'oil change 5', price: 800, description: ' des 5', img: 'https://i.ibb.co/MpKgMy9/mechanic-hand-checking-fixing-broken-car-car-service-garage.jpg' },
//     { id: 6, name: 'oil change 6', price: 9000, description: ' des 6', img: 'https://i.ibb.co/M5X8ZFW/muscular-car-service-worker-repairing-vehicle.jpg' },

//     // {

//     //     https://i.ibb.co/HPQ0hn9/car-mechanic-changing-wheels-car.jpg
//     //         https://i.ibb.co/L8JLFJ4/chad-kirchoff-xe-e69j6-Ds-unsplash.jpg
//     //     https://i.ibb.co/FwGsptZ/kate-ibragimova-b-EGTs-OCn-Hro-unsplash.jpg
//     //         https://i.ibb.co/MpkYGNN/laurel-and-michael-evans-c-KDq7nx-Vd-Q-unsplash.jpg
//     //     https://i.ibb.co/MpKgMy9/mechanic-hand-checking-fixing-broken-car-car-service-garage.jpg
//     //         https://i.ibb.co/M5X8ZFW/muscular-car-service-worker-repairing-vehicle.jpg
//     // }

// ]

const Services = () => {


    const [services] = UseRepairdataHooks([])
    console.log(services);
    return (
        <div>
            <h2>Service ({services.length})</h2>
            {/* <img src={repair1} alt="" srcset="" /> */}

            {

                services.map(service => <Service
                    key={service.id}
                    service={service}

                ></Service>)
            }
        </div>
    );
};

export default Services;