import { useState, useEffect } from 'react';
import getAllCharacters from "../api/characters";
import List from "../components/characters/_list";
import Filter from "../components/characters/_filter";

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

            { (data)
              ? <div>
                  <Filter data={ data } />
                  <List data={ data } />
                </div>
              : 'Loading ...'
            }
        </div>
    )
}

export default Characters;
