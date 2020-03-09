import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function SearchRadios(props) {
  //should pass through props TODO make scalable
  //TODO style better
  return (
    <div className="form-group">
      <input className="form-control" style={{ width: "20px", display: "inline-block" }}
        type="radio" value="podcasts" onClick={props.handleInputChange} name="searchType" defaultChecked />
      <label htmlFor="podcasts" style={{ width: "80px", display: "inline-block" }}>Podcasts</label>
      <input className="form-control" style={{ width: "20px", display: "inline-block" }}
        type="radio" value="movies" onClick={props.handleInputChange} name="searchType" />
      <label htmlFor="movies">Movies</label>
    </div>
  );
}