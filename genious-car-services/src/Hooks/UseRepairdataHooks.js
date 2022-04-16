import { useEffect, useState } from 'react';

const UseRepairdataHooks = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const url = `repairedata.json`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })



    }, [])

    return [services, setServices]


};

export default UseRepairdataHooks;