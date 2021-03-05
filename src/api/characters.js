const getAllCharacters = async (page) => {
    const response = await fetch(`https://swapi.dev/api/people?page=` + page);
    return response.json();
}

export default getAllCharacters;