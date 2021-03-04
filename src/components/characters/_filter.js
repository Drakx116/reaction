const Filter = ({ data }) =>
{
  const updateList = (event) => {
    const search = event.target.value;

    if (!search) {
      data.results.forEach(character => {
          document.getElementById(character.name).style.display = 'table-row';
      });
    }
    else {
      data.results.forEach(character => {
        if (! character.name.match(search)) {
          document.getElementById(character.name).style.display = 'none';
        }
      });
    }
  };

  return (
    <div>
      <label htmlFor="search"><b> Search </b></label>
      <input id="search" type="text" name="search" onKeyUp={ event => updateList(event) } />
    </div>
  );
}

export default Filter;
