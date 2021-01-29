import { useState, useEffect } from 'react';
import getAllCharacters from "../api/characters";

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
            { (data) ? data.results.map(character => {
                return (
                  <li> { character.name } </li>
                );
            }) : 'Loading ...' }
        </div>
    )
}

export default Characters;