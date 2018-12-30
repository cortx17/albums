import React from "react";

const SearchButton = props => {
  return (
    <div>
      <button
        id="btn-search"
        className="button is-primary"
        onClick={props.getInfo}
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
