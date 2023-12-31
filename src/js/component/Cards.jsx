import React from "react";
import PropTypes from "prop-types";

//card component
const Card = (props) => {

  return (
    <div className="card m-1" style={{ width: "18rem" }}>
      <img src={props.image} class="card-img-top" alt="Random dog photo" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <div class="card-footer">
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};

export default Card;
