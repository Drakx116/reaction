const getCharacterById = async (id) => {
    const response = await fetch(`https://swapi.dev/api/people/` + id);
    return response.json();
}

export default getCharacterById;