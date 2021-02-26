import Single from "./_single";

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
        { data.results.map((character, i) => {
          return (
            <Single key={ character.name } character={ character } />
          );
        })}
      </tbody>
    </table>
  );
}

export default List;
