import React from "react";

//jumbotron component
const Jumbotron = () => {
  return (
    <div className="jumbotron mx-5 mb-4 bg-secondary bg-opacity-25 px-4 py-5">
      <h1 className="display-4 fw-medium">A Warm Welcome!</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, velit eu dictum suscipit, tortor ligula pharetra ligula, nec aliquet erat eros ac eros. Nunc elementum dui non augue feugiat molestie. Nunc in ultrices arcu. Suspendisse iaculis vitae purus ac euismod. Etiam tellus arcu, tincidunt nec ligula eget, venenatis pulvinar mi. Donec vestibulum vel tellus in pulvinar.
      </p>
      <a
        className="btn btn-primary"
        href="#"
        role="button"
      >
        Call to Action!
      </a>
    </div>
  );
};

export default Jumbotron;
