// import React, { useEffect, useState } from 'react';
// import "./Footer.css"

// const Footer = () => {
//     const [date, setDate] = useState();

//     const getYear = () => setDate(new Date().getFullYear())

//     useEffect(() => {
//         getYear()
//     }, [])
//     return (
//         <footer>
//             <p><small>&copy;  tonmoy {date}</small></p>
//         </footer>
//     );
// };

// export default Footer;



import React, { useEffect, useState } from 'react';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
const Footer = () => {

    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear()
    }, [])
    return (
        <footer className='bg-gray-900  py-4 mt-8 md:mt-24'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className=' flex max-w-xs mx-auto items-center justify-evenly md:justify-between'>
                    <a
                        href='https://facebook.com/sparkgears'
                        className='text-white hover:text-gray-800 transition-colors duration-200'
                    >
                        <BsFacebook className='text-xl hover:text-blue-800 transition-colors duration-200'></BsFacebook>
                    </a>
                    <a
                        href='https://twitter.com/MdChowdhuray'
                        className='text-white  hover:text-gray-800 transition-colors duration-200'
                    >

                        <BsTwitter className='text-xl hover:text-blue-500 transition-colors duration-200'></BsTwitter>
                    </a>
                    <a
                        href='https://github.com/anamerasul'
                        className='text-white hover:text-gray-200 transition-colors duration-200'
                    >
                        <BsGithub className='text-xl hover:text-gray-200 transition-colors duration-200'></BsGithub>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/anamerasul/'
                        className='text-white hover:text-gray-800 transition-colors duration-200'
                    >
                        <BsLinkedin className='text-xl hover:text-blue-500 transition-colors duration-200'></BsLinkedin>
                    </a>


                </div>
                <div className='text-center text-white pt-4 sm:pt-8 font-light flex items-center justify-center'>
                    All Rights Reserved By &copy; Geneous car | {date}
                </div>
            </div>
        </footer>
    );
};

export default Footer;