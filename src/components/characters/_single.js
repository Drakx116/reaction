const Single = ({ character, page, place }) => {
  const link = '/characters/' + (page * 10 +  place);

  return (
    <tr id={character.name}>
      <td><a href={ link }> { character.name } </a> </td>
      <td> { character.gender } </td>
      <td> { character.birth_year } </td>
    </tr>
  );
}

export default Single;
