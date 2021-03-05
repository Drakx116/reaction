const Single = ({ character, page, place }) => {
  const link = 'characters/' +  parseInt( (page - 1) * 10 + place + 1);

  return (
    <tr id={character.name}>
      <td><a href={ link }> { character.name } </a> </td>
      <td> { character.gender } </td>
      <td> { character.birth_year } </td>
    </tr>
  );
}

export default Single;
