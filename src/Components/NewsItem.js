
import React, { Component } from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className={`card text-${props.mode==='light'?'dark':'light'} bg-${props.mode} `}>
        <span className="position-absolute top-0 start-100 translate-middle badge  bg-danger" > 
                {source}
          </span>
          <img className="card-img-top" src={imageUrl} alt="Card image cap" />
          
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text ">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
