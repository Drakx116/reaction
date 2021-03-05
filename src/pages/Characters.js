import { useState, useEffect } from 'react';
import getAllCharacters from "../api/characters";
import List from "../components/characters/_list";
import Filter from "../components/characters/_filter";
import Pagination from "../components/characters/_pagination";

const Characters = () => {
    const [ data, setData ] = useState(null);
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        getAllCharacters(page).then(data => setData(data));
    }, [page]);

    const updatePagination = (newPagination) => {
        setPage(page + newPagination);
    }

    return (
        <div className="container">
            <h1 className="title"> Characters </h1>

            { (data)
              ? <div>
                  <Filter data={ data } />
                  <List data={ data } />
                  <Pagination onChange={ updatePagination } page={ page }  />
                </div>
              : 'Loading ...'
            }
        </div>
    )
}

export default Characters;
