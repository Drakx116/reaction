const Single = ({ character }) => {
  return (
    <tr id={character.name}>
      <td> { character.name } </td>
      <td> { character.gender } </td>
      <td> { character.birth_year } </td>
    </tr>
  );
}

export default Single;
