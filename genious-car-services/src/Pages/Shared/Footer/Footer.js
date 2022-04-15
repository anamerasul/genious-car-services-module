import React, { useEffect, useState } from 'react';
import "./Footer.css"

const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear()
    }, [])
    return (
        <footer>
            <p><small>&copy;  tonmoy {date}</small></p>
        </footer>
    );
};

export default Footer;