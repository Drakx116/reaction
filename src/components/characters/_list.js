const List = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> Gender </th>
          <th> Birth Date </th>
        </tr>
      </thead>

      <tbody>
        { data.results.map(character => {
          return (
            <tr key={ character.name }>
              <td> { character.name } </td>
              <td> { character.gender } </td>
              <td> { character.birth_year } </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default List;
