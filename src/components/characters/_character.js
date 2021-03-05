const Character = ({ data }) => {
    return(
        <div className="character">
            <span><b> Name </b> { data.name }</span><br/>
            <span><b> Gender </b> { data.gender }</span><br/>
            <span><b> Birth Year </b> { data.birth_year }</span><br/>
            <span><b> Height </b> { data.height }</span><br/>
            <span><b> Mass </b> { data.mass }</span><br/>
            <span><b> Hair Color </b> { data.hair_color }</span>
        </div>
    )
}

export default Character;