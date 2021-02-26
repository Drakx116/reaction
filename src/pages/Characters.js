import { useState, useEffect } from 'react';
import getAllCharacters from "../api/characters";
import List from "../components/characters/_list";

const Characters = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getAllCharacters().then(data => setData(data))
        }

        return () => mounted = false;
    }, []);

    return (
        <div className="container">
            <h1 className="title"> Characters </h1>

            { (data) ? <List data={ data } /> : 'Loading ...' }
        </div>
    )
}

export default Characters;
