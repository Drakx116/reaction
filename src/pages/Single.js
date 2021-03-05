import { useState, useEffect } from "react";
import getCharacterById from "../api/single";
import Character from "../components/characters/_character";

const Single = ({ match }) => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        if (!data) {
            getCharacterById(match.params.id).then(data => {
                setData(data);
            });
        }
    });

    return (
        <div className="container">
            <h1 className="title"> Single Character </h1>
            { data ? <Character data={ data } /> : 'Loading' }

        </div>
    );
}

export default Single;