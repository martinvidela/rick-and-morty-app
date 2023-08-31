import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/action";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

export const Card = ({ character, id, addFav, removeFav, myFavorites }) => {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = (character) => {
    if (isFav) {
      setIsFav(false);
      removeFav(character);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };

  return (
    <div>
      <div className="card">
        {isFav ? ( <button className="fav" onClick={() => handleFavorite(character.id)}>❤️</button>) 
               : ( <button className="fav" onClick={() => handleFavorite(character)}>🤍</button>)}
        <Link to={`/detail/${character.id}`}>
          <img className="imagenPj" src={character.image} alt="" />
        </Link>
        <div className="halfcard">
          <h2 className="namecard">{character.name}</h2>
          <h2>{character.species}</h2>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
