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
      <input type="text" name="seach" onKeyUp={ event => updateList(event) } />
    </div>
  );
}

export default Filter;
