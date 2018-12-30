import React from "react";

const SearchField = props => {
  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input
          className="input is-medium is-primary is-rounded"
          type="text"
          onChange={props.setSearchWord}
          onKeyPress={props.onKeyPress}
          placeholder="Search artist..."
        />
        <span className="icon is-small is-left">
          <i className="fas fa-search" />
        </span>
      </p>
    </div>
  );
};

export default SearchField;
