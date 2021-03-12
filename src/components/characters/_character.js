import store from "../../redux/store";
import actions from "../../redux/actions/like";

const Character = ({ data, id }) => {
    const like = () => {
        store.dispatch(actions.like(id));
    }

    const dislike = () => {
        store.dispatch(actions.dislike(id));
    };

    return(
        <div className="character">
            <span><b> Name </b> { data.name }</span><br/>
            <span><b> Gender </b> { data.gender }</span><br/>
            <span><b> Birth Year </b> { data.birth_year }</span><br/>
            <span><b> Height </b> { data.height }</span><br/>
            <span><b> Mass </b> { data.mass }</span><br/>
            <span><b> Hair Color </b> { data.hair_color }</span><br/><br/>

            <button onClick={ like }> LIKE </button>
            <button onClick={ dislike }> DISLIKE </button>
        </div>
    )
}

export default Character;
