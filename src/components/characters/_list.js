import Single from "./_single";

const List = ({ data, page }) => {
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
            <Single page={ page } key={ i } place={ i } character={ character } />
          );
        })}
      </tbody>
    </table>
  );
}

export default List;
